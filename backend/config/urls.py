from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from .views import home  # Import home view
from config import views


# API Documentation
schema_view = get_schema_view(
    openapi.Info(
        title="Akwaaba Experience API",
        default_version="v1",
        description="API documentation for Akwaaba Experience",
    ),
    public=True,
)

urlpatterns = [
    # Django Admin
    path('admin/', admin.site.urls),

    # Root Home Page
    path('', home, name='home'),

    # JWT Authentication Endpoints
    path('api/auth/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # User Registration & Authentication
    path('api/auth/', include('users.urls')),
    path('api/auth/', include('rest_framework.urls')),

    # API Documentation (Swagger)
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='swagger-ui'),
]

# Adding API endpoints for experiences and bookings
urlpatterns += [
    path('api/experiences/', include('experiences.urls')),
    path('api/bookings/', include('bookings.urls')),  # Newly added Booking endpoints
]
