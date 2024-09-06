from django import template

from tapir.statistics.models import PurchaseBasket, CreditAccount
from tapir.statistics.views import get_average_monthly_basket

register = template.Library()


@register.inclusion_tag(
    "statistics/tags/purchase_statistics_card.html", takes_context=True
)
def purchase_statistics_card(context, tapir_user):
    user_purchases = PurchaseBasket.objects.filter(tapir_user=tapir_user)
    context["last_purchases"] = user_purchases.order_by("-purchase_date")[:10]
    context["average_basket_per_month"] = "{:.2f}".format(
        get_average_monthly_basket(user_purchases)
    )

    return context


@register.inclusion_tag("statistics/tags/credit_account_card.html", takes_context=True)
def credit_account_card(context, tapir_user):
    filtered_credits = CreditAccount.filter(tapir_user=tapir_user)
    context["filtered_credits"] = filtered_credits.order_by("-credit_date")[:10]

    return context
