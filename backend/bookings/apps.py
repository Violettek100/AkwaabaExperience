from django.apps import AppConfig

class BookingsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'bookings'

    def ready(self):
        """
        Ensures that the signals module is loaded when the app starts.
        This is necessary for Django to recognize and use the Booking model signals.
        """
        import bookings.signals  # ✅ Ensures signals are connected
