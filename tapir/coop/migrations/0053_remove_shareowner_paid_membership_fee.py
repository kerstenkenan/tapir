# Generated by Django 5.1.5 on 2025-02-10 11:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("coop", "0052_remove_shareownership_amount_paid"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="shareowner",
            name="paid_membership_fee",
        ),
    ]
