# Generated by Django 5.1.5 on 2025-02-10 10:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("coop", "0051_membershipresignation_cancellation_reason_category"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="shareownership",
            name="amount_paid",
        ),
    ]
