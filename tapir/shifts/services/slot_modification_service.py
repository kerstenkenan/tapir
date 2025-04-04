import csv
import datetime
import io
from dataclasses import dataclass
from typing import List

from django.db import transaction
from django.db.models import Q
from django.utils import timezone

from tapir.accounts.models import TapirUser
from tapir.shifts.models import (
    ShiftTemplate,
    ShiftSlotTemplate,
    ShiftAttendanceTemplate,
    ShiftAttendance,
    ShiftSlot,
    DeleteShiftAttendanceTemplateLogEntry,
)
from tapir.utils.user_utils import UserUtils


class SlotModificationService:
    WORKDAY = "workday"
    WEEKEND = "weekend"

    @dataclass(frozen=True)
    class ParameterSet:
        target_weekdays: frozenset[int]
        time: datetime.time
        origin_slot_name: str
        target_slot_name: str | None  # if None, the slot will be deleted
        target_capabilities: frozenset | None

    class SlotNames:
        WARENANNAHME = "Warenannahme & Lagerhaltung"
        KASSE = "Kasse"
        REINIGUNG = "Reinigung & Aufräumen"
        ALLGEMEIN = "Allgemein"

    @classmethod
    def build_changes(
        cls,
        parameter_sets: List[ParameterSet],
        excluded_shift_template_ids: list[int],
        excluded_slot_template_ids: list[int],
    ):
        return {
            parameter_set: cls.pick_slots_to_modify(
                parameter_set, excluded_shift_template_ids, excluded_slot_template_ids
            )
            for parameter_set in parameter_sets
        }

    @classmethod
    @transaction.atomic
    def apply_changes(
        cls,
        parameter_sets: List[ParameterSet],
        excluded_shift_template_ids: list[int] | None = None,
        excluded_slot_template_ids: list[int] | None = None,
        dry_run: bool = True,
    ):
        if excluded_shift_template_ids is None:
            excluded_shift_template_ids = []
        if excluded_slot_template_ids is None:
            excluded_slot_template_ids = []

        changes = cls.build_changes(
            parameter_sets, excluded_shift_template_ids, excluded_slot_template_ids
        )
        print(cls.get_affected_members(changes))

        if dry_run:
            print("This is a dry run, no changes will actually be applied.")
            return

        for parameter_set, slots_templates in changes.items():
            for slot_template in slots_templates:
                cls.apply_change(parameter_set, slot_template)

    @classmethod
    def apply_change(
        cls, parameter_set: ParameterSet, slot_template: ShiftSlotTemplate
    ):
        shift_is_in_the_future_filter = Q(
            shift__start_time__date__gte=timezone.now().date()
        )
        if parameter_set.target_slot_name is None:
            slot_template.generated_slots.filter(shift_is_in_the_future_filter).delete()
            if (
                hasattr(slot_template, "attendance_template")
                and slot_template.attendance_template is not None
            ):
                DeleteShiftAttendanceTemplateLogEntry().populate(
                    actor=None,
                    tapir_user=slot_template.attendance_template.user,
                    shift_attendance_template=slot_template.attendance_template,
                    comment="Unregistered because the slot got deleted",
                ).save()
            slot_template.delete()
            return

        slot_template.generated_slots.filter(shift_is_in_the_future_filter).update(
            name=parameter_set.target_slot_name
        )
        slot_template.name = parameter_set.target_slot_name
        slot_template.save()

        if parameter_set.target_capabilities is None:
            return

        slot_template.generated_slots.filter(shift_is_in_the_future_filter).update(
            required_capabilities=list(parameter_set.target_capabilities)
        )
        slot_template.required_capabilities = list(parameter_set.target_capabilities)
        slot_template.save()

    @classmethod
    def pick_slots_to_modify(
        cls,
        parameter_set: ParameterSet,
        excluded_shift_template_ids: list[int],
        excluded_slot_template_ids: list[int],
    ):
        shift_templates = cls.pick_shift_templates(
            parameter_set, excluded_shift_template_ids
        )
        slot_templates = [
            cls.pick_slot_template_from_shift_template(parameter_set, shift_template)
            for shift_template in shift_templates
        ]

        slot_templates = [
            slot_template
            for slot_template in slot_templates
            if slot_template.id not in excluded_slot_template_ids
        ]

        return slot_templates

    @classmethod
    def pick_shift_templates(
        cls,
        parameter_set: ParameterSet,
        excluded_shift_template_ids: list[int],
    ) -> List[ShiftTemplate]:
        return ShiftTemplate.objects.filter(
            start_time=parameter_set.time, weekday__in=parameter_set.target_weekdays
        ).exclude(id__in=excluded_shift_template_ids)

    @classmethod
    def pick_slot_template_from_shift_template(
        cls, parameter_set: ParameterSet, shift_template: ShiftTemplate
    ) -> ShiftSlotTemplate:
        # The shift is assumed to have been picked according to the parameters, here we only look at the slot

        candidate_slot_templates = shift_template.slot_templates.filter(
            name=parameter_set.origin_slot_name
        )

        if not candidate_slot_templates.exists():
            raise ShiftSlotTemplate.DoesNotExist(
                f"Could not find slot template with name {parameter_set.origin_slot_name} "
                f"on shift template {shift_template}"
            )

        if candidate_slot_templates.count() == 1:
            return candidate_slot_templates.first()

        # if possible, pick a slot that doesn't have an attendance
        existing_attendance_templates = ShiftAttendanceTemplate.objects.filter(
            slot_template__in=candidate_slot_templates
        )
        slot_templates_without_attendance = candidate_slot_templates.exclude(
            attendance_template__in=existing_attendance_templates
        )
        if slot_templates_without_attendance.count() == 1:
            return slot_templates_without_attendance.first()
        if slot_templates_without_attendance.count() > 1:
            candidate_slot_templates = slot_templates_without_attendance

        return candidate_slot_templates.order_by("-id").first()

    @classmethod
    def get_affected_members(cls, changes: dict[ParameterSet, list[ShiftSlotTemplate]]):
        result = io.StringIO()
        writer = csv.writer(result)
        writer.writerow(
            ["member_id", "member_email", "member_name", "change", "slot", "warnings"]
        )

        for parameter_set, slot_templates in changes.items():
            for slot_template in slot_templates:
                already_written_user = None
                if hasattr(slot_template, "attendance_template"):
                    tapir_user = slot_template.attendance_template.user
                    already_written_user = tapir_user
                    cls.write_csv_row(writer, tapir_user, slot_template, parameter_set)
                affected_attendances = ShiftAttendance.objects.filter(
                    slot__in=slot_template.generated_slots.all(),
                    slot__shift__start_time__gt=timezone.now(),
                ).with_valid_state()
                if already_written_user:
                    affected_attendances = affected_attendances.exclude(
                        user=already_written_user
                    )
                for attendance in affected_attendances:
                    cls.write_csv_row(
                        writer, attendance.user, attendance.slot, parameter_set
                    )

        return result.getvalue()

    @classmethod
    def write_csv_row(
        cls,
        writer,
        tapir_user: TapirUser,
        slot: ShiftSlotTemplate | ShiftSlot,
        parameter_set: ParameterSet,
    ):
        prefix = "ABCD" if isinstance(slot, ShiftSlotTemplate) else "not-ABCD"

        if parameter_set.target_slot_name is None:
            change = f"{prefix} delete"
        else:
            change = (
                f"{prefix} from {parameter_set.origin_slot_name} "
                f"to {parameter_set.target_slot_name or 'Allgemein'}"
            )

        warning = "OK"
        if parameter_set.target_capabilities is not None:
            required_capabilities = parameter_set.target_capabilities
            member_capabilities = set(tapir_user.shift_user_data.capabilities)
            if not required_capabilities.issubset(member_capabilities):
                warning = f"Missing qualifications: {list(required_capabilities.difference(member_capabilities))}"

        writer.writerow(
            [
                tapir_user.get_member_number(),
                tapir_user.email,
                tapir_user.get_display_name(UserUtils.DISPLAY_NAME_TYPE_FULL),
                change,
                slot,
                warning,
            ]
        )
