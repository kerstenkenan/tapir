from django.apps import AppConfig


class AccountsConfig(AppConfig):
    name = "tapir.accounts"

    def ready(self):
        self.register_emails()

    @staticmethod
    def register_emails():
        from tapir.core.tapir_email_builder_base import TapirEmailBuilderBase
        from tapir.accounts.emails.create_account_reminder_email import (
            CreateAccountReminderEmailBuilder,
        )

        TapirEmailBuilderBase.register_email(CreateAccountReminderEmailBuilder)
