from django.db.models import QuerySet
from django.utils.translation import gettext_lazy as _

from tapir.coop.models import ShareOwner, MemberStatus
from tapir.coop.services.investing_status_service import InvestingStatusService
from tapir.coop.services.membership_pause_service import MembershipPauseService
from tapir.shifts.services.frozen_status_history_service import (
    FrozenStatusHistoryService,
)
from tapir.shifts.services.shift_attendance_mode_service import (
    ShiftAttendanceModeService,
)
from tapir.welcomedesk.utils import get_display_name_for_welcome_desk


class WelcomeDeskReasonsCannotShopService:
    @classmethod
    def optimize_queryset_for_this_service(
        cls, queryset: QuerySet[ShareOwner], reference_time, reference_date
    ) -> QuerySet[ShareOwner]:
        queryset = queryset.prefetch_related("user")
        queryset = InvestingStatusService.annotate_share_owner_queryset_with_investing_status_at_datetime(
            queryset, reference_time
        )
        queryset = ShiftAttendanceModeService.annotate_share_owner_queryset_with_attendance_mode_at_datetime(
            queryset, reference_time
        )
        queryset = (
            MembershipPauseService.annotate_share_owner_queryset_with_has_active_pause(
                queryset, reference_date
            )
        )
        queryset = FrozenStatusHistoryService.annotate_share_owner_queryset_with_is_frozen_at_datetime(
            queryset, reference_time
        )
        return queryset

    @classmethod
    def build_reasons_why_this_member_cannot_shop(
        cls, share_owner: ShareOwner, request_user, reference_time, reference_date
    ) -> list[str]:
        possible_reasons = {
            cls.should_show_no_account_reason: _(
                "%(name)s does not have a Tapir account. Contact a member of the management team."
            ),
            cls.should_show_investing_reason: _(
                "%(name)s is an investing member. If they want to shop, they have to become an active member. "
                "Contact a member of the management team."
            ),
            cls.should_show_frozen_reason: _(
                "%(name)s has been frozen because they missed too many shifts."
                "If they want to shop, they must first be re-activated."
                "Contact a member of the management team."
            ),
            cls.should_show_paused_reason: _(
                "%(name)s has paused their membership. Contact a member of the management team."
            ),
            cls.should_show_not_a_member_reason: _(
                "%(name)s has is not a member of the cooperative. They may have transferred their shares to another member. Contact a member of the management team."
            ),
        }

        return [
            message
            % {"name": get_display_name_for_welcome_desk(share_owner, request_user)}
            for check, message in possible_reasons.items()
            if check(
                share_owner=share_owner,
                reference_date=reference_date,
                reference_time=reference_time,
            )
        ]

    @staticmethod
    def should_show_no_account_reason(share_owner: ShareOwner, **_):
        return not share_owner.user

    @staticmethod
    def should_show_investing_reason(share_owner: ShareOwner, reference_time, **_):
        return InvestingStatusService.is_investing(share_owner, reference_time)

    @staticmethod
    def should_show_frozen_reason(share_owner: ShareOwner, reference_time, **_):
        return (
            share_owner.user is not None
            and FrozenStatusHistoryService.is_frozen_at_datetime(
                share_owner, reference_time
            )
        )

    @staticmethod
    def should_show_paused_reason(share_owner: ShareOwner, reference_date, **_):
        return MembershipPauseService.has_active_pause(share_owner, reference_date)

    @staticmethod
    def should_show_not_a_member_reason(share_owner: ShareOwner, reference_time, **_):
        return share_owner.get_member_status(reference_time) == MemberStatus.SOLD
