from django.http import JsonResponse

def home(request):
    """
    Returns a JSON response for the root URL.
    """
    return JsonResponse({"message": "Welcome to Akwaaba Experience API!"})
