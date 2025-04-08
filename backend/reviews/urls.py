# reviews/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ReviewViewSet

router = DefaultRouter()
router.register(r'reviews', ReviewViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

# experiences/urls.py
urlpatterns += [
    path('experiences/<int:pk>/reviews/', include('reviews.urls')),
]