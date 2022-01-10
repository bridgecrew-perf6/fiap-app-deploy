from celery import Celery
import requests
import os

AUTH_URL = os.environ.get('AUTH_URL', 'http://localhost:5001/api')

app = Celery('user')

app.config_from_object('celeryconfig')

@app.task(name='create-user')
def create_user(user):
  return requests.post(f'{AUTH_URL}/users', json=user)