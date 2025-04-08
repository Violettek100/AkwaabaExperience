from django.db.models.signals import post_save
from django.dispatch import receiver
from django.template.loader import render_to_string
from django.core.mail import send_mail
from django.conf import settings
from event_calendar.services import get_calendar_service  # ✅ Corrected Import
from .models import Booking

@receiver(post_save, sender=Booking)
def send_booking_email(sender, instance, created, **kwargs):
    """
    Sends a booking confirmation email when a new booking is created.
    Also integrates Google Calendar event creation.
    """
    if created:
        context = {
            'user': instance.user,
            'experience': instance.experience,
            'booking': instance
        }

        # Render HTML email content
        html_message = render_to_string("emails/booking_confirmation.html", context)
        
        # Send email
        send_mail(
            subject="Booking Confirmation",
            message="Your booking is confirmed!",  # Plain text fallback
            from_email=settings.DEFAULT_FROM_EMAIL,  # Uses DEFAULT_FROM_EMAIL from settings
            recipient_list=[instance.user.email],
            html_message=html_message  # HTML email content
        )

        # ✅ Create Google Calendar Event
        create_calendar_event(instance)

def create_calendar_event(instance):
    """
    Creates a Google Calendar event for confirmed bookings.
    """
    if instance.status == 'confirmed':
        service = get_calendar_service(instance.user)
        
        event = {
            'summary': f"{instance.experience.title} Booking",
            'location': instance.experience.location,
            'start': {'dateTime': instance.date.isoformat()},
            'end': {'dateTime': (instance.date + instance.experience.duration).isoformat()},
        }
        
        service.events().insert(
            calendarId='primary',
            body=event
        ).execute()
