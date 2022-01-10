from flask_restful import Api
from api.interfaces.api import API
from api.views.signin.view import SignInView
from api.views.token.view import TokenView
from api.views.users.view import UserView

def routes(api: API):
  api.add_resource(UserView, '/users')
  api.add_resource(SignInView, '/signin')
  api.add_resource(TokenView, '/token/validate')