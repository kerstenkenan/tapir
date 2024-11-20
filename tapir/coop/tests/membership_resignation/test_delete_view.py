import datetime
from http import HTTPStatus

from django.urls import reverse

from tapir.coop.config import feature_flag_membership_resignation
from tapir.coop.models import (
    MembershipResignation,
    MembershipResignationDeleteLogEntry,
)
from tapir.coop.tests.factories import (
    MembershipResignationFactory,
)
from tapir.utils.tests_utils import FeatureFlagTestMixin, TapirFactoryTestBase


class TestMembershipResignationDeleteView(FeatureFlagTestMixin, TapirFactoryTestBase):
    def setUp(self) -> None:
        super().setUp()
        self.given_feature_flag_value(feature_flag_membership_resignation, True)

    def test_membershipResignationDeleteView_loggedInAsNormalUser_accessDenied(self):
        self.login_as_normal_user()
        resignation: MembershipResignation = MembershipResignationFactory.create()

        response = self.client.post(
            reverse("coop:membership_resignation_delete", args=[resignation.id]),
        )
        self.assertStatusCode(response, HTTPStatus.FORBIDDEN)

    def test_membershipResignationDeleteView_loggedInAsMemberOffice_accessGranted(self):
        self.login_as_member_office_user()
        resignation: MembershipResignation = MembershipResignationFactory.create()

        response = self.client.post(
            reverse("coop:membership_resignation_delete", args=[resignation.id]),
        )
        self.assertStatusCode(response, HTTPStatus.FOUND)

    def test_membershipResignationDeleteView_featureFlagDisabled_accessDenied(self):
        self.given_feature_flag_value(feature_flag_membership_resignation, False)
        self.login_as_member_office_user()
        resignation: MembershipResignation = MembershipResignationFactory.create()

        response = self.client.post(
            reverse("coop:membership_resignation_delete", args=[resignation.id]),
        )

        self.assertStatusCode(response, HTTPStatus.FORBIDDEN)

    def test_membershipResignationDeleteView_default_sharesEndDateSetToNone(self):
        self.login_as_member_office_user()
        resignation: MembershipResignation = MembershipResignationFactory.create()
        resignation.share_owner.share_ownerships.update(end_date=datetime.date.today())

        response = self.client.post(
            reverse("coop:membership_resignation_delete", args=[resignation.id]),
            follow=True,
        )
        self.assertStatusCode(response, HTTPStatus.OK)
        self.assertTrue(
            all(
                [
                    share_ownership.end_date is None
                    for share_ownership in resignation.share_owner.share_ownerships.all()
                ]
            )
        )

    def test_membershipResignationDeleteView_default_logEntryCreated(self):
        actor = self.login_as_member_office_user()
        resignation: MembershipResignation = MembershipResignationFactory.create()
        response = self.client.post(
            reverse("coop:membership_resignation_delete", args=[resignation.id]),
            follow=True,
        )
        self.assertStatusCode(response, HTTPStatus.OK)
        self.assertEqual(MembershipResignation.objects.all().count(), 0)
        self.assertEqual(MembershipResignationDeleteLogEntry.objects.count(), 1)
        log_entry = MembershipResignationDeleteLogEntry.objects.get()
        self.assertEqual(resignation.id, int(log_entry.values["id"]))
        self.assertEqual(actor, log_entry.actor)