# experiences/views.py
from rest_framework import viewsets, permissions
from drf_yasg.utils import swagger_auto_schema
from .models import Experience  # Removed Booking import
from .serializers import ExperienceSerializer

class ExperienceViewSet(viewsets.ModelViewSet):
    """
    ViewSet for managing experiences.
    Allows authenticated users to create, update, or delete their experiences.
    Read-only access for unauthenticated users.
    """
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    @swagger_auto_schema(
        operation_description="Create a new experience listing",
        responses={201: ExperienceSerializer}
    )
    def create(self, request, *args, **kwargs):
        """
        Custom Create API with Swagger documentation.
        Automatically assigns the logged-in user as the host of the experience.
        """
        return super().create(request, *args, **kwargs)

    def perform_create(self, serializer):
        """
        Automatically assigns the logged-in user as the host of the experience.
        """
        serializer.save(host=self.request.user)
