# Generated by Django 5.1.2 on 2024-11-12 10:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("shifts", "0063_shiftexemption_shifts_shif_start_d_8c1069_idx_and_more"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="shiftuserdata",
            name="attendance_mode",
        ),
        migrations.AddField(
            model_name="shiftuserdata",
            name="is_frozen",
            field=models.BooleanField(default=False, verbose_name="Is frozen"),
        ),
    ]
