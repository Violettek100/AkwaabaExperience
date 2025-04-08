# bookings/schemas.py
from drf_yasg import openapi

booking_schema = openapi.Schema(
    type=openapi.TYPE_OBJECT,
    properties={
        'experience': openapi.Schema(type=openapi.TYPE_INTEGER),
        'date': openapi.Schema(type=openapi.TYPE_STRING, format='date'),
        'participants': openapi.Schema(type=openapi.TYPE_INTEGER)
    }
)