# Generated by Django 3.2.13 on 2022-04-29 22:15

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("shifts", "0034_auto_20220417_0947"),
    ]

    operations = [
        migrations.AlterField(
            model_name="shiftslot",
            name="required_capabilities",
            field=django.contrib.postgres.fields.ArrayField(
                base_field=models.CharField(
                    choices=[
                        ("shift_coordinator", "Teamleader"),
                        ("cashier", "Cashier"),
                        ("member_office", "Member Office"),
                        ("bread_delivery", "Bread Delivery"),
                        ("red_card", "Red Card"),
                        ("first_aid", "First Aid"),
                        ("welcome_session", "Welcome Session"),
                    ],
                    max_length=128,
                ),
                blank=True,
                default=list,
                size=None,
            ),
        ),
        migrations.AlterField(
            model_name="shiftslottemplate",
            name="required_capabilities",
            field=django.contrib.postgres.fields.ArrayField(
                base_field=models.CharField(
                    choices=[
                        ("shift_coordinator", "Teamleader"),
                        ("cashier", "Cashier"),
                        ("member_office", "Member Office"),
                        ("bread_delivery", "Bread Delivery"),
                        ("red_card", "Red Card"),
                        ("first_aid", "First Aid"),
                        ("welcome_session", "Welcome Session"),
                    ],
                    max_length=128,
                ),
                blank=True,
                default=list,
                size=None,
            ),
        ),
        migrations.AlterField(
            model_name="shiftuserdata",
            name="capabilities",
            field=django.contrib.postgres.fields.ArrayField(
                base_field=models.CharField(
                    choices=[
                        ("shift_coordinator", "Teamleader"),
                        ("cashier", "Cashier"),
                        ("member_office", "Member Office"),
                        ("bread_delivery", "Bread Delivery"),
                        ("red_card", "Red Card"),
                        ("first_aid", "First Aid"),
                        ("welcome_session", "Welcome Session"),
                    ],
                    max_length=128,
                ),
                default=list,
                size=None,
            ),
        ),
    ]
