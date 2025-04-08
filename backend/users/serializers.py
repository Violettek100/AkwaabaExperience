from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password
from .models import CustomUser, Profile

class UserSerializer(serializers.ModelSerializer):
    """
    Serializer for CustomUser model.
    Ensures password validation and secure storage.
    """
    password = serializers.CharField(
        write_only=True,
        required=True,
        validators=[validate_password]
    )

    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'email', 'password', 'phone_number')

class LoginSerializer(serializers.Serializer):
    """
    Serializer for user login.
    Takes username and password.
    """
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

class ProfileSerializer(serializers.ModelSerializer):
    """
    Serializer for Profile model.
    """
    class Meta:
        model = Profile
        fields = '__all__'
