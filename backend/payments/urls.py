from django.urls import path
from .views import InitiatePayment, VerifyPayment, PaymentWebhook

urlpatterns = [
    path('initiate/', InitiatePayment.as_view(), name='initiate-payment'),
    path('verify/<str:tx_ref>/', VerifyPayment.as_view(), name='verify-payment'),
    path('webhook/', PaymentWebhook.as_view(), name='payment-webhook'),
]
