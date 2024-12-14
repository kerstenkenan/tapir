import datetime

from django.utils import timezone

from tapir.coop.models import ShareOwnership
from tapir.coop.tests.factories import ShareOwnerFactory
from tapir.statistics.views.fancy_graph.number_of_investing_members_view import (
    NumberOfInvestingMembersAtDateView,
)
from tapir.utils.tests_utils import (
    TapirFactoryTestBase,
    mock_timezone_now,
)


class TestNumberOfInvestingMembersView(TapirFactoryTestBase):
    NOW = datetime.datetime(year=2023, month=4, day=1, hour=12)
    REFERENCE_TIME = timezone.make_aware(
        datetime.datetime(year=2022, month=6, day=15, hour=12)
    )

    def setUp(self) -> None:
        super().setUp()
        self.NOW = mock_timezone_now(self, self.NOW)

    def test_calculateDatapoint_memberIsNotInvesting_notCounted(self):
        ShareOwnerFactory.create(is_investing=False)

        result = NumberOfInvestingMembersAtDateView().calculate_datapoint(
            self.REFERENCE_TIME
        )

        self.assertEqual(0, result)

    def test_calculateDatapoint_memberIsInvesting_counted(self):
        ShareOwnerFactory.create(is_investing=True)
        ShareOwnership.objects.update(
            start_date=self.REFERENCE_TIME.date() - datetime.timedelta(days=1)
        )

        result = NumberOfInvestingMembersAtDateView().calculate_datapoint(
            self.REFERENCE_TIME
        )

        self.assertEqual(1, result)
