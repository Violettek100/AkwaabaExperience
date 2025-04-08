from django.urls import path
from .views import BookingCreateView

urlpatterns = [
    path("", BookingCreateView.as_view(), name="create-booking"),  # ✅ Check this is correct
]
