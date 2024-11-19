# Generated by Django 5.1.2 on 2024-11-18 15:04

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("coop", "0049_shareownership_transferred_from"),
    ]

    operations = [
        migrations.AlterField(
            model_name="shareownership",
            name="transferred_from",
            field=models.OneToOneField(
                null=True,
                on_delete=django.db.models.deletion.PROTECT,
                to="coop.shareownership",
            ),
        ),
    ]
