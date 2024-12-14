import datetime

from django.utils import timezone

from tapir.coop.models import ShareOwner
from tapir.shifts.models import CreateShiftAttendanceTemplateLogEntry
from tapir.statistics.views.fancy_graph.number_of_abcd_members_view import (
    NumberOfAbcdMembersAtDateView,
)
from tapir.utils.tests_utils import (
    TapirFactoryTestBase,
    mock_timezone_now,
    create_attendance_template_log_entry_in_the_past,
    create_member_that_is_working,
)


class TestNumberOfAbcdMembersView(TapirFactoryTestBase):
    NOW = datetime.datetime(year=2023, month=4, day=1, hour=12)
    REFERENCE_TIME = timezone.make_aware(
        datetime.datetime(year=2022, month=6, day=15, hour=12)
    )

    def setUp(self) -> None:
        super().setUp()
        self.NOW = mock_timezone_now(self, self.NOW)

    def test_calculateDatapoint_memberIsAbcdButIsNotWorking_notCounted(self):
        tapir_user = create_member_that_is_working(self, self.REFERENCE_TIME)
        ShareOwner.objects.update(is_investing=True)
        create_attendance_template_log_entry_in_the_past(
            CreateShiftAttendanceTemplateLogEntry, tapir_user, self.REFERENCE_TIME
        )

        result = NumberOfAbcdMembersAtDateView().calculate_datapoint(
            self.REFERENCE_TIME
        )

        self.assertEqual(0, result)

    def test_calculateDatapoint_memberIsWorkingButIsNotAbcd_notCounted(self):
        create_member_that_is_working(self, self.REFERENCE_TIME)

        result = NumberOfAbcdMembersAtDateView().calculate_datapoint(
            self.REFERENCE_TIME
        )

        self.assertEqual(0, result)

    def test_calculateDatapoint_memberIsWorkingAndAbcd_counted(self):
        tapir_user = create_member_that_is_working(self, self.REFERENCE_TIME)
        create_attendance_template_log_entry_in_the_past(
            CreateShiftAttendanceTemplateLogEntry, tapir_user, self.REFERENCE_TIME
        )

        result = NumberOfAbcdMembersAtDateView().calculate_datapoint(
            self.REFERENCE_TIME
        )

        self.assertEqual(1, result)
