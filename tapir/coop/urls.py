from django.urls import path

from tapir.coop import views

app_name = "coop"
urlpatterns = [
    path(
        "share/<int:pk>/edit",
        views.ShareOwnershipUpdateView.as_view(),
        name="share_update",
    ),
    path(
        "share/<int:pk>/delete",
        views.ShareOwnershipDeleteView.as_view(),
        name="shareownership_delete",
    ),
    path("user/draft/", views.DraftUserListView.as_view(), name="draftuser_list"),
    path(
        "user/draft/create",
        views.DraftUserCreateView.as_view(),
        name="draftuser_create",
    ),
    path(
        "user/draft/register",
        views.DraftUserRegisterView.as_view(),
        name="draftuser_register",
    ),
    path(
        "user/draft/register/confirm",
        views.DraftUserConfirmRegistrationView.as_view(),
        name="draftuser_confirm_registration",
    ),
    path(
        "user/draft/<int:pk>/edit",
        views.DraftUserUpdateView.as_view(),
        name="draftuser_update",
    ),
    path(
        "user/draft/<int:pk>",
        views.DraftUserDetailView.as_view(),
        name="draftuser_detail",
    ),
    path(
        "user/draft/<int:pk>/delete",
        views.DraftUserDeleteView.as_view(),
        name="draftuser_delete",
    ),
    path(
        "user/draft/<int:pk>/signed_membership_agreement",
        views.mark_signed_membership_agreement,
        name="mark_draftuser_signed_membership_agreement",
    ),
    path(
        "user/draft/<int:pk>/attended_welcome_session",
        views.mark_attended_welcome_session,
        name="mark_draftuser_attended_welcome_session",
    ),
    path(
        "member/<int:pk>/attended_welcome_session",
        views.mark_shareowner_attended_welcome_session,
        name="mark_shareowner_attended_welcome_session",
    ),
    path(
        "user/draft/<int:pk>/membership_agreement",
        views.draftuser_membership_agreement,
        name="draftuser_membership_agreement",
    ),
    path(
        "member/<int:shareowner_pk>/create_shareownerships",
        views.ShareOwnershipCreateMultipleView.as_view(),
        name="share_create_multiple",
    ),
    path(
        "membership_resignation/new",
        views.MembershipResignationCreateView.as_view(),
        name="membership_resignation_create",
    ),
    path(
        "membership_resignation/<int:pk>/edit",
        views.MembershipResignationEditView.as_view(),
        name="membership_resignation_edit",
    ),
    path(
        "membership_resignation/<int:pk>/detail",
        views.MembershipResignationDetailView.as_view(),
        name="membership_resignation_detail",
    ),
    path(
        "membership_resignation/<int:pk>/delete",
        views.MembershipResignationDeleteView.as_view(),
        name="membership_resignation_delete",
    ),
    path(
        "membership_resignation_list",
        views.MembershipResignationList.as_view(),
        name="membership_resignation_list",
    ),
    path(
        "member/<int:shareowner_pk>/create_user",
        views.CreateUserFromShareOwnerView.as_view(),
        name="create_user_from_shareowner",
    ),
    path(
        "user/draft/<int:pk>/draftuser_create_share_owner",
        views.CreateShareOwnerFromDraftUserView.as_view(),
        name="draftuser_create_share_owner",
    ),
    path(
        "member/",
        views.ShareOwnerListView.as_view(),
        name="shareowner_list",
    ),
    path(
        "member/export/mailchimp",
        views.ShareOwnerExportMailchimpView.as_view(),
        name="shareowner_export_mailchimp",
    ),
    path(
        "member/<int:pk>/membership_confirmation",
        views.ShareOwnerMembershipConfirmationFileView.as_view(),
        name="shareowner_membership_confirmation",
    ),
    path(
        "member/<int:pk>/membership_confirmation/send",
        views.send_shareowner_membership_confirmation_welcome_email,
        name="send_shareowner_membership_confirmation_welcome_email",
    ),
    path(
        "member/<int:pk>/",
        views.ShareOwnerDetailView.as_view(),
        name="shareowner_detail",
    ),
    path(
        "member/<int:pk>/edit",
        views.ShareOwnerUpdateView.as_view(),
        name="shareowner_update",
    ),
    path(
        "statistics",
        views.StatisticsView.as_view(),
        name="statistics",
    ),
    path(
        "about",
        views.AboutView.as_view(),
        name="about",
    ),
    path(
        "matching_program",
        views.MatchingProgramListView.as_view(),
        name="matching_program_list",
    ),
    path(
        "member_count_evolution_json",
        views.MemberCountEvolutionJsonView.as_view(),
        name="member_count_evolution_json",
    ),
    path(
        "share_count_evolution_json",
        views.ShareCountEvolutionJsonView.as_view(),
        name="share_count_evolution_json",
    ),
    path(
        "member_age_distribution_json",
        views.MemberAgeDistributionJsonView.as_view(),
        name="member_age_distribution_json",
    ),
    path(
        "payments/list",
        views.IncomingPaymentListView.as_view(),
        name="incoming_payment_list",
    ),
    path(
        "payments/create",
        views.IncomingPaymentCreateView.as_view(),
        name="incoming_payment_create",
    ),
    path(
        "payments/<int:pk>/edit/",
        views.IncomingPaymentEditView.as_view(),
        name="incoming_payment_edit",
    ),
    path(
        "payments/<int:pk>/delete/",
        views.IncomingPaymentDeleteView.as_view(),
        name="incoming_payment_delete",
    ),
    path(
        "new_members_json_view",
        views.MemberStatusUpdatesJsonView.as_view(),
        name="member_status_updates_json_view",
    ),
    path(
        "new_members_csv_view",
        views.member_status_updates_csv_view,
        name="member_status_updates_csv_view",
    ),
    path(
        "active_members_with_account_at_end_of_month_csv_view",
        views.active_members_with_account_at_end_of_month_csv_view,
        name="active_members_with_account_at_end_of_month_csv_view",
    ),
    path(
        "number_of_co_purchasers_json_view",
        views.NumberOfCoPurchasersJsonView.as_view(),
        name="number_of_co_purchasers_json_view",
    ),
    path(
        "number_of_co_purchasers_csv_view",
        views.number_of_co_purchasers_csv_view,
        name="number_of_co_purchasers_csv_view",
    ),
    path(
        "membership_pauses",
        views.MembershipPauseListView.as_view(),
        name="membership_pauses",
    ),
    path(
        "membership_pause/new",
        views.MembershipPauseCreateView.as_view(),
        name="membership_pause_create",
    ),
    path(
        "membership_pause/edit/<int:pk>",
        views.MembershipPauseEditView.as_view(),
        name="membership_pause_edit",
    ),
    path(
        "management",
        views.MemberManagementView.as_view(),
        name="management",
    ),
    path(
        "create/general_account/",
        views.CreateGeneralTapirAccountView.as_view(),
        name="create_general_account",
    ),
    path(
        "general_accounts",
        views.GeneralTapirAccountsListView.as_view(),
        name="general_accounts_list",
    ),
]
