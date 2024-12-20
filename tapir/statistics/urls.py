from django.urls import path

import tapir.statistics.views.fancy_graph.base_view
import tapir.statistics.views.fancy_graph.number_of_abcd_members_view
import tapir.statistics.views.fancy_graph.number_of_active_members_view
import tapir.statistics.views.fancy_graph.number_of_co_purchasers_view
import tapir.statistics.views.fancy_graph.number_of_created_resignations_view
import tapir.statistics.views.fancy_graph.number_of_exempted_members_that_work_view
import tapir.statistics.views.fancy_graph.number_of_exempted_members_view
import tapir.statistics.views.fancy_graph.number_of_flying_members_view
import tapir.statistics.views.fancy_graph.number_of_frozen_members_view
import tapir.statistics.views.fancy_graph.number_of_investing_members_view
import tapir.statistics.views.fancy_graph.number_of_long_term_frozen_members_view
import tapir.statistics.views.fancy_graph.number_of_members_view
import tapir.statistics.views.fancy_graph.number_of_paused_members_view
import tapir.statistics.views.fancy_graph.number_of_pending_resignations_view
import tapir.statistics.views.fancy_graph.number_of_purchasing_members_view
import tapir.statistics.views.fancy_graph.number_of_shift_partners_view
import tapir.statistics.views.fancy_graph.number_of_working_members_view
from tapir.statistics import views
from tapir.statistics.views import fancy_graph

app_name = "statistics"
urlpatterns = [
    path(
        "main_statistics",
        views.MainStatisticsView.as_view(),
        name="main_statistics",
    ),
    path(
        "member_count_evolution_json",
        views.MemberCountEvolutionJsonView.as_view(),
        name="member_count_evolution_json",
    ),
    path(
        "new_members_per_month_json",
        views.NewMembersPerMonthJsonView.as_view(),
        name="new_members_per_month_json",
    ),
    path(
        "frozen_members_json",
        views.FrozenMembersJsonView.as_view(),
        name="frozen_members_json",
    ),
    path(
        "co_purchasers_json",
        views.CoPurchasersJsonView.as_view(),
        name="co_purchasers_json",
    ),
    path(
        "financing_campaign_json/<int:pk>",
        views.FinancingCampaignJsonView.as_view(),
        name="financing_campaign_json",
    ),
    path(
        "update_purchase_data_manually",
        views.UpdatePurchaseDataManuallyView.as_view(),
        name="update_purchase_data_manually",
    ),
    path(
        "user/<int:pk>/basket_sum_evolution_json",
        views.BasketSumEvolutionJsonView.as_view(),
        name="basket_sum_evolution_json",
    ),
    path(
        "fancy_graph",
        fancy_graph.base_view.FancyGraphView.as_view(),
        name="fancy_graph",
    ),
    path(
        "number_of_members_at_date",
        fancy_graph.number_of_members_view.NumberOfMembersAtDateView.as_view(),
        name="number_of_members_at_date",
    ),
    path(
        "number_of_active_members_at_date",
        fancy_graph.number_of_active_members_view.NumberOfActiveMembersAtDateView.as_view(),
        name="number_of_active_members_at_date",
    ),
    path(
        "number_of_working_members_at_date",
        fancy_graph.number_of_working_members_view.NumberOfWorkingMembersAtDateView.as_view(),
        name="number_of_working_members_at_date",
    ),
    path(
        "number_of_purchasing_members_at_date",
        fancy_graph.number_of_purchasing_members_view.NumberOfPurchasingMembersAtDateView.as_view(),
        name="number_of_purchasing_members_at_date",
    ),
    path(
        "number_of_frozen_members_at_date",
        fancy_graph.number_of_frozen_members_view.NumberOfFrozenMembersAtDateView.as_view(),
        name="number_of_frozen_members_at_date",
    ),
    path(
        "number_of_long_term_frozen_members_at_date",
        fancy_graph.number_of_long_term_frozen_members_view.NumberOfLongTermFrozenMembersAtDateView.as_view(),
        name="number_of_long_term_frozen_members_at_date",
    ),
    path(
        "number_of_shift_partners_at_date",
        fancy_graph.number_of_shift_partners_view.NumberOfShiftPartnersAtDateView.as_view(),
        name="number_of_shift_partners_at_date",
    ),
    path(
        "number_of_co_purchasers_at_date",
        fancy_graph.number_of_co_purchasers_view.NumberOfCoPurchasersAtDateView.as_view(),
        name="number_of_co_purchasers_at_date",
    ),
    path(
        "number_of_flying_members_at_date",
        fancy_graph.number_of_flying_members_view.NumberOfFlyingMembersAtDateView.as_view(),
        name="number_of_flying_members_at_date",
    ),
    path(
        "number_of_abcd_members_at_date",
        fancy_graph.number_of_abcd_members_view.NumberOfAbcdMembersAtDateView.as_view(),
        name="number_of_abcd_members_at_date",
    ),
    path(
        "number_of_investing_members_at_date",
        fancy_graph.number_of_investing_members_view.NumberOfInvestingMembersAtDateView.as_view(),
        name="number_of_investing_members_at_date",
    ),
    path(
        "number_of_paused_members_at_date",
        fancy_graph.number_of_paused_members_view.NumberOfPausedMembersAtDateView.as_view(),
        name="number_of_paused_members_at_date",
    ),
    path(
        "number_of_pending_resignations_at_date",
        fancy_graph.number_of_pending_resignations_view.NumberOfPendingResignationsAtDateView.as_view(),
        name="number_of_pending_resignations_at_date",
    ),
    path(
        "number_of_created_resignations_in_same_month",
        fancy_graph.number_of_created_resignations_view.NumberOfCreatedResignationsInSameMonthView.as_view(),
        name="number_of_created_resignations_in_same_month",
    ),
    path(
        "number_of_exempted_members_at_date",
        fancy_graph.number_of_exempted_members_view.NumberOfExemptedMembersAtDateView.as_view(),
        name="number_of_exempted_members_at_date",
    ),
    path(
        "number_of_exempted_members_that_work",
        fancy_graph.number_of_exempted_members_that_work_view.NumberOfExemptedMembersThatWorkView.as_view(),
        name="number_of_exempted_members_that_work",
    ),
]
