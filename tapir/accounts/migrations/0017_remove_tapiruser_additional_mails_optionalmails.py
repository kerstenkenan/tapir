# Generated by Django 5.1.4 on 2024-12-27 13:38

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("accounts", "0016_auto_20240915_1113"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="tapiruser",
            name="additional_mails",
        ),
        migrations.CreateModel(
            name="OptionalMails",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "mail_id",
                    models.CharField(
                        max_length=256,
                    ),
                ),
                ("choice", models.BooleanField()),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="mail_setting",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
            options={
                "constraints": [
                    models.UniqueConstraint(
                        fields=("user", "mail_id"), name="user-mail-constraint"
                    )
                ],
            },
        ),
    ]
