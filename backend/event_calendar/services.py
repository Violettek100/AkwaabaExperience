# calendar/services.py
from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build

def get_calendar_service(user):
    credentials = Credentials(
        token=user.social_auth.get(provider='google-oauth2').extra_data['access_token'],
        refresh_token=user.social_auth.get(provider='google-oauth2').extra_data['refresh_token'],
        token_uri="https://oauth2.googleapis.com/token",
        client_id=os.getenv('GOOGLE_CLIENT_ID'),
        client_secret=os.getenv('GOOGLE_CLIENT_SECRET')
    )
    return build('calendar', 'v3', credentials=credentials)