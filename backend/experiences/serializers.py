# experiences/serializers.py
from rest_framework import serializers
from .models import Experience  # Removed Booking import

class ExperienceSerializer(serializers.ModelSerializer):
    """
    Serializer for the Experience model.
    Includes validation to prevent negative pricing.
    """
    class Meta:
        model = Experience
        fields = '__all__'
        read_only_fields = ('host',)

    def validate_price(self, value):
        """
        Ensures that the price is not negative.
        """
        if value < 0:
            raise serializers.ValidationError("Price cannot be negative")
        return value
