# Generated by Django 3.1.13 on 2021-08-08 08:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("coop", "0017_use_phone_number_field"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="draftuser",
            name="username",
        ),
    ]