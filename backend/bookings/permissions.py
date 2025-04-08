# bookings/permissions.py
from rest_framework import permissions

class IsBookingOwner(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.user == request.user