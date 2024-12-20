import datetime

from django.db.models import Q

from tapir.shifts.models import ShiftAttendanceMode, ShiftUserData
from tapir.shifts.services.shift_attendance_mode_service import (
    ShiftAttendanceModeService,
)
from tapir.shifts.services.shift_expectation_service import ShiftExpectationService
from tapir.statistics.views.fancy_graph.base_view import (
    DatapointView,
)


class NumberOfAbcdMembersAtDateView(DatapointView):
    def calculate_datapoint(self, reference_time: datetime.datetime) -> int:

        working_members = (
            ShiftExpectationService.annotate_shift_user_data_queryset_with_working_status_at_datetime(
                ShiftUserData.objects.all(), reference_time
            )
        ).filter(**{ShiftExpectationService.ANNOTATION_IS_WORKING_AT_DATE: True})
        working_members_ids = list(working_members.values_list("id", flat=True))

        abcd_members = ShiftAttendanceModeService.annotate_shift_user_data_queryset_with_attendance_mode_at_datetime(
            ShiftUserData.objects.all(), reference_time
        ).filter(
            **{
                ShiftAttendanceModeService.ANNOTATION_SHIFT_ATTENDANCE_MODE_AT_DATE: ShiftAttendanceMode.REGULAR
            }
        )
        abcd_members_ids = list(abcd_members.values_list("id", flat=True))

        return (
            ShiftUserData.objects.filter(
                Q(id__in=working_members_ids) & Q(id__in=abcd_members_ids)
            )
            .distinct()
            .count()
        )
