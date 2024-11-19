# Generated by Django 5.1.2 on 2024-11-18 14:49

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("coop", "0048_membershipresignationdeletelogentry_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="shareownership",
            name="transferred_from",
            field=models.ForeignKey(
                null=True,
                on_delete=django.db.models.deletion.PROTECT,
                to="coop.shareownership",
            ),
        ),
    ]
