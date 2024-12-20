import datetime

from tapir.shifts.models import ShiftUserData
from tapir.shifts.services.shift_expectation_service import ShiftExpectationService
from tapir.statistics.views.fancy_graph.base_view import DatapointView


class NumberOfWorkingMembersAtDateView(DatapointView):
    def calculate_datapoint(self, reference_time: datetime.datetime) -> int:
        queryset = ShiftExpectationService.annotate_shift_user_data_queryset_with_working_status_at_datetime(
            ShiftUserData.objects.all(), reference_time
        )

        queryset = queryset.filter(
            **{ShiftExpectationService.ANNOTATION_IS_WORKING_AT_DATE: True}
        )

        return queryset.count()
