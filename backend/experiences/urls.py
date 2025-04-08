from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ExperienceViewSet

# Create a router and register the ExperienceViewSet
router = DefaultRouter()
router.register(r'experiences', ExperienceViewSet)

urlpatterns = [
    path('', include(router.urls)),  # Include all generated routes from the router
]
