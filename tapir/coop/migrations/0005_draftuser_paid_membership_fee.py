# Generated by Django 3.1.8 on 2021-05-14 09:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("coop", "0004_auto_20210503_0954"),
    ]

    operations = [
        migrations.AddField(
            model_name="draftuser",
            name="paid_membership_fee",
            field=models.BooleanField(
                default=False, verbose_name="Paid Membership Fee"
            ),
        ),
    ]
