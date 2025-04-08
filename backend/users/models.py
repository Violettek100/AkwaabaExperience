from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    """
    Custom user model extending AbstractUser.
    Adds phone_number field and uses email for string representation.
    """
    phone_number = models.CharField(max_length=20, blank=True, null=True)

    def __str__(self):
        return self.email if self.email else self.username

class Profile(models.Model):
    """
    Profile model linked to CustomUser.
    Contains additional user details such as bio, location, and birth_date.
    """
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    bio = models.TextField(max_length=500, blank=True)
    location = models.CharField(max_length=30, blank=True)
    birth_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.user.username
