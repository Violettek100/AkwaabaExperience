from django.db import models
from users.models import CustomUser
from experiences.models import Experience

class Review(models.Model):
    """
    Model for user reviews on experiences.
    Includes an approval system for moderating reviews.
    """
    RATING_CHOICES = [(i, i) for i in range(1, 6)]
    
    experience = models.ForeignKey(Experience, on_delete=models.CASCADE, related_name='reviews')
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    rating = models.PositiveSmallIntegerField(choices=RATING_CHOICES)
    comment = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    is_approved = models.BooleanField(default=False)  # ✅ New field for admin moderation

    class Meta:
        unique_together = ['experience', 'user']  # Ensures one review per user per experience

    def __str__(self):
        return f"{self.user.username} - {self.experience.title}"
