import django_tables2
import django_filters
from django.contrib.auth.mixins import LoginRequiredMixin, PermissionRequiredMixin
from django.urls import reverse_lazy
from django.utils.translation import gettext_lazy as _, pgettext_lazy
from django.utils.html import format_html
from django.views.generic import CreateView, UpdateView, DeleteView, DetailView
from django.shortcuts import redirect
from django.db import transaction

from tapir.core.config import TAPIR_TABLE_CLASSES, TAPIR_TABLE_TEMPLATE
from tapir.utils.user_utils import UserUtils
from tapir.core.templatetags.core import tapir_button_link_to_action
from tapir.settings import PERMISSION_COOP_MANAGE

from django_filters.views import FilterView
from django_tables2 import SingleTableView
from django_tables2.export import ExportMixin

from tapir.coop.forms import MembershipResignationForm
from tapir.core.views import TapirFormMixin
from tapir.coop.models import (
    MembershipResignation,
    MembershipResignationCreateLogEntry,
    MembershipResignationUpdateLogEntry,
)
from tapir.coop.services.MembershipResignationService import (
    MembershipResignationService,
)
from tapir.log.views import UpdateViewLogMixin
from tapir.log.util import freeze_for_log
from tapir.utils.forms import DateInputTapir

from tapir.coop.emails.membershipresignation_confirmation_email import (
    MembershipResignationConfirmation,
)
from tapir.coop.emails.membershipresignation_transfered_shares_confirmation import (
    MembershipResignationTransferedSharesConfirmation,
)


class MembershipResignationTable(django_tables2.Table):
    class Meta:
        model = MembershipResignation
        template_name = TAPIR_TABLE_TEMPLATE
        fields = [
            "share_owner",
            "cancellation_date",
            "cancellation_reason",
            "paid_out",
            "pay_out_day",
        ]
        sequence = [
            "share_owner",
            "cancellation_reason",
            "cancellation_date",
            "pay_out_day",
            "paid_out",
            "add_buttons",
        ]
        order_by = "-cancellation_date"
        attrs = {"class": TAPIR_TABLE_CLASSES}
        empty_text = "No entries"
        default = "No entries"

    cancellation_reason = django_tables2.Column(
        attrs={"td": {"class": "col-3 text-break"}}
    )
    pay_out_day = django_tables2.DateColumn(
        format="d/m/Y",
        verbose_name="Membership ends",
        default="",
        attrs={"td": {"class": "col-2 text-break"}},
    )
    paid_out = django_tables2.Column(
        attrs={"td": {"class": "col-2 text-break"}},
    )
    add_buttons = django_tables2.Column(
        empty_values=(),
        verbose_name="Actions",
        orderable=False,
        exclude_from_export=True,
    )

    def before_render(self, request):
        self.request = request

    def render_share_owner(self, record: MembershipResignation):
        return UserUtils.build_html_link_for_viewer(
            record.share_owner, self.request.user
        )

    def value_share_owner(self, record: MembershipResignation):
        return record.share_owner.get_member_number()

    def render_cancellation_reason(self, record: MembershipResignation):
        return f"{record.cancellation_reason}"

    def render_cancellation_date(self, record: MembershipResignation):
        return record.cancellation_date.strftime("%d/%m/%Y")

    def render_paid_out(self, record):
        if record.willing_to_gift_shares_to_coop:
            return _(f"Share(s) gifted {chr(8594)} SuperCoop")
        elif record.transfering_shares_to != None:
            return format_html(
                "{} {} {}",
                _("Share(s) gifted"),
                chr(8594),
                UserUtils.build_html_link_for_viewer(
                    record.transfering_shares_to, self.request.user
                ),
            )
        else:
            return "Yes" if record.paid_out else "No"

    def render_add_buttons(self, value, record: MembershipResignation):
        return format_html(
            "<a href='{}' class='{}'>{}</a>",
            reverse_lazy("coop:resignedmember_detail", args=[record.pk]),
            tapir_button_link_to_action(),
            format_html("<span class='material-icons'>edit</span>"),
        )


class MembershipResignationFilter(django_filters.FilterSet):
    display_name = django_filters.CharFilter(
        method="display_name_filter", label=_("Search member or ID")
    )
    pay_out_start_date = django_filters.DateFilter(
        field_name="pay_out_day",
        widget=DateInputTapir(format="%d/%m/%Y"),
        lookup_expr="gte",
        label=_("Pay out start date"),
    )
    pay_out_end_date = django_filters.DateFilter(
        field_name="pay_out_day",
        widget=DateInputTapir(format="%d/%m/%Y"),
        lookup_expr="lte",
        label=_("Pay out end date"),
    )
    paid_out = django_filters.BooleanFilter(
        widget=django_filters.widgets.BooleanWidget()
    )

    class Meta:
        model = MembershipResignation
        fields = ["display_name", "paid_out", "pay_out_start_date", "pay_out_end_date"]

    @staticmethod
    def display_name_filter(
        queryset: MembershipResignation.MembershipResignationQuerySet, name, value: str
    ):
        return queryset.with_name_or_id(value).distinct()


class MembershipResignationList(
    LoginRequiredMixin,
    FilterView,
    ExportMixin,
    SingleTableView,
):
    table_class = MembershipResignationTable
    model = MembershipResignation
    template_name = "coop/resigned_members_list.html"
    export_formats = ["csv", "json"]
    filterset_class = MembershipResignationFilter

    def get_context_data(self, **kwargs):
        context_data = super().get_context_data(**kwargs)
        context_data["total_of_resigned_members"] = (
            MembershipResignation.objects.count()
        )
        return context_data


class MembershipResignationEditView(
    LoginRequiredMixin,
    PermissionRequiredMixin,
    TapirFormMixin,
    UpdateViewLogMixin,
    UpdateView,
):
    model = MembershipResignation
    form_class = MembershipResignationForm
    permission_required = PERMISSION_COOP_MANAGE
    success_url = reverse_lazy("coop:resigned_members_list")

    def get_context_data(self, **kwargs):
        context_data = super().get_context_data(**kwargs)
        context_data["page_title"] = _("Cancel membership of %(name)s") % {
            "name": UserUtils.build_display_name_for_viewer(
                person=self.object.share_owner, viewer=self.request.user
            )
        }
        context_data["card_title"] = _("Cancel membership of %(name)s") % {
            "name": UserUtils.build_html_link_for_viewer(
                person=self.object.share_owner, viewer=self.request.user
            )
        }
        return context_data

    def form_valid(self, form):
        with transaction.atomic():
            result = super().form_valid(form)
            new_frozen = freeze_for_log(form.instance)
            if self.old_object_frozen != new_frozen:
                MembershipResignationUpdateLogEntry().populate(
                    old_frozen=self.old_object_frozen,
                    new_frozen=new_frozen,
                    model=form.instance,
                    actor=self.request.user,
                ).save()

        return result


class MembershipResignationCreateView(
    LoginRequiredMixin, PermissionRequiredMixin, TapirFormMixin, CreateView
):
    model = MembershipResignation
    form_class = MembershipResignationForm
    permission_required = PERMISSION_COOP_MANAGE
    success_url = reverse_lazy("coop:resigned_members_list")

    def get_context_data(self, **kwargs):
        context_data = super().get_context_data(**kwargs)
        context_data["page_title"] = _("Resign a new membership")
        context_data["card_title"] = context_data["page_title"]
        return context_data

    def form_valid(self, form):
        with transaction.atomic():
            result = super().form_valid(form)
            MembershipResignationService.update_shifts_and_shares(
                self, resignation=form.instance
            )
            MembershipResignationCreateLogEntry().populate(
                actor=self.request.user,
                model=form.instance,
            ).save()
            email = MembershipResignationConfirmation(resigned_member=form.instance)
            email.send_to_share_owner(
                actor=self.request.user, recipient=form.instance.share_owner
            )
            if form.instance.transfering_shares_to != None:
                email = MembershipResignationTransferedSharesConfirmation(
                    resigned_member=form.instance
                )
                email.send_to_share_owner(
                    actor=self.request.user,
                    recipient=form.instance.transfering_shares_to,
                )
        return result


class MembershipResignationDetailView(
    LoginRequiredMixin, PermissionRequiredMixin, DetailView
):
    permission_required = PERMISSION_COOP_MANAGE
    model = MembershipResignation


class MembershipResignationRemoveFromListView(
    LoginRequiredMixin, PermissionRequiredMixin, DeleteView
):
    model = MembershipResignation
    permission_required = PERMISSION_COOP_MANAGE
    success_url = reverse_lazy("coop:resigned_members_list")

    def delete(self, request, *args, **kwargs):
        self.object = self.get_object()
        MembershipResignationService.delete_end_dates(self.object)
        self.object.delete()
        response = redirect(self.success_url)
        return response
