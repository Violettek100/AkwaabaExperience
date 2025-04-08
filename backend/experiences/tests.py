# experiences/tasks.py
from celery import shared_task
from django.db.models import Avg

@shared_task
def update_experience_ratings():
    from .models import Experience
    for exp in Experience.objects.all():
        exp.avg_rating = exp.reviews.aggregate(Avg('rating'))['rating__avg'] or 0
        exp.save(update_fields=['avg_rating'])