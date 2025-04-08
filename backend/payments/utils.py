# payments/utils.py
from rave_python import Rave

def process_refund(booking):
    rave = Rave(os.getenv('FLW_PUBLIC_KEY'), os.getenv('FLW_SECRET_KEY'))
    
    payload = {
        "ref": booking.payment_reference,
        "amount": float(booking.refund_amount)
    }
    
    try:
        response = rave.Refund.verify(payload)
        return response
    except Exception as e:
        # Handle failed refunds
        return None