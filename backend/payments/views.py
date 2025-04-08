import uuid
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rave_python import Rave
import os
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from bookings.models import Booking  # Ensure Booking model exists

class InitiatePayment(APIView):
    """Handles payment initiation using Flutterwave."""
    def post(self, request):
        rave = Rave(os.getenv('FLW_PUBLIC_KEY'), os.getenv('FLW_SECRET_KEY'))
        payload = {
            "tx_ref": "akw-" + str(uuid.uuid4()),
            "amount": request.data.get('amount'),
            "currency": "GHS",
            "redirect_url": "https://your-callback-url.com",
            "customer": {
                "email": request.user.email,
                "phone_number": request.user.phone_number
            }
        }
        try:
            response = rave.Card.charge(payload)
            return Response(response, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

class VerifyPayment(APIView):
    """Verifies a payment transaction using Flutterwave."""
    def get(self, request, tx_ref):
        rave = Rave(os.getenv('FLW_PUBLIC_KEY'), os.getenv('FLW_SECRET_KEY'))
        try:
            response = rave.Transaction.verify(tx_ref)
            return Response(response, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

@method_decorator(csrf_exempt, name='dispatch')
class PaymentWebhook(APIView):
    """Handles Flutterwave webhook callbacks to update booking statuses."""
    def post(self, request):
        secret_hash = os.getenv('FLW_WEBHOOK_HASH')
        signature = request.headers.get('verif-hash')

        if signature != secret_hash:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

        if request.data.get('status') == 'successful':
            Booking.objects.filter(
                payment_reference=request.data.get('tx_ref')
            ).update(status='confirmed')

        return Response(status=status.HTTP_200_OK)
