from django.db import models
from django.core.validators import MaxValueValidator
from users.models import CustomUser  # Import the CustomUser model

class Experience(models.Model):
    """
    Model for hosting experiences.
    Includes rating calculations and cancellation policies.
    """
    host = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=8, decimal_places=2)
    duration = models.DurationField()
    location = models.CharField(max_length=100)
    capacity = models.PositiveIntegerField(default=1)
    available_dates = models.JSONField(default=list)

    # ✅ Cancellation & Refund Policy
    cancellation_window = models.PositiveIntegerField(
        default=24,
        help_text="Hours before experience when cancellation is allowed"
    )
    refund_percentage = models.PositiveIntegerField(
        default=80,
        validators=[MaxValueValidator(100)],
        help_text="Percentage refund for cancellations within the window"
    )

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)  # Keeping updated_at field for tracking

    @property
    def average_rating(self):
        """
        Returns the average rating for this experience.
        If no reviews exist, returns 0.0.
        """
        from django.db.models import Avg
        return self.reviews.aggregate(Avg('rating'))['rating__avg'] or 0.0

    @property
    def total_reviews(self):
        """
        Returns the total number of reviews for this experience.
        """
        return self.reviews.count()

    def __str__(self):
        return self.title
