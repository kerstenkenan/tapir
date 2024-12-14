import datetime

from tapir.coop.models import ShareOwner, MemberStatus
from tapir.statistics.views.fancy_graph.base_view import DatapointView


class NumberOfActiveMembersAtDateView(DatapointView):
    def calculate_datapoint(self, reference_time: datetime.datetime) -> int:
        reference_date = reference_time.date()
        return (
            ShareOwner.objects.with_status(MemberStatus.ACTIVE, reference_date)
            .distinct()
            .count()
        )
