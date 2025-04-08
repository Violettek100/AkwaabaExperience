from django.db import models

class Booking(models.Model):
    date = models.DateField()
    guests = models.IntegerField()
    experiences = models.JSONField()  # ✅ Stores list of selected experiences

    def __str__(self):
        return f"Booking on {self.date} for {self.guests} guests"
