import datetime

from django.utils import timezone

from tapir.shifts.models import ShiftUserData, ShiftAttendanceMode
from tapir.utils.shortcuts import get_timezone_aware_datetime


class ShiftExpectationService:
    @staticmethod
    def is_member_expected_to_do_shifts(
        shift_user_data: ShiftUserData, at_datetime: datetime.date | None = None
    ) -> bool:
        if at_datetime is None:
            at_datetime = timezone.now()

        if (
            not hasattr(shift_user_data.user, "share_owner")
            or shift_user_data.user.share_owner is None
        ):
            return False

        if shift_user_data.attendance_mode == ShiftAttendanceMode.FROZEN:
            return False

        if shift_user_data.user.date_joined.date() > at_datetime.date():
            return False

        if not shift_user_data.user.share_owner.is_active(at_datetime):
            return False

        if shift_user_data.is_currently_exempted_from_shifts(at_datetime.date()):
            return False

        return True

    @classmethod
    def get_credit_requirement_for_cycle(
        cls, shift_user_data: ShiftUserData, cycle_start_date: datetime.date
    ):
        if not cls.is_member_expected_to_do_shifts(
            shift_user_data,
            get_timezone_aware_datetime(cycle_start_date, timezone.now().time()),
        ):
            return 0
        return 1
