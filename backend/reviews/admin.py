from django.contrib import admin
from .models import Review

@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    """
    Admin panel for managing reviews.
    Allows bulk approval of reviews.
    """
    list_display = ('experience', 'user', 'rating', 'is_approved', 'created_at')
    list_filter = ('is_approved', 'rating', 'created_at')
    search_fields = ('user__username', 'experience__title', 'comment')

    actions = ['approve_reviews']

    def approve_reviews(self, request, queryset):
        """
        Bulk action to approve selected reviews.
        """
        queryset.update(is_approved=True)
        self.message_user(request, f"{queryset.count()} reviews approved successfully.")

    approve_reviews.short_description = "Approve selected reviews"
