# Generated by Django 5.1.5 on 2025-03-19 10:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("shifts", "0066_alter_shift_cancelled_reason"),
    ]

    operations = [
        migrations.AddField(
            model_name="shift",
            name="deleted",
            field=models.BooleanField(default=False),
        ),
    ]
