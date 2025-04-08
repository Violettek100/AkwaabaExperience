# reviews/views.py
from rest_framework import viewsets, permissions
from .models import Review
from .serializers import ReviewSerializer
from bookings.models import Booking

class ReviewViewSet(viewsets.ModelViewSet):
    serializer_class = ReviewSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Review.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        experience = serializer.validated_data['experience']
        
        # Verify booking exists
        if not Booking.objects.filter(
            user=self.request.user,
            experience=experience,
            status='confirmed'
        ).exists():
            raise serializers.ValidationError("You must book this experience first")
            
        serializer.save(user=self.request.user)