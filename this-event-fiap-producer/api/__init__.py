from celery import Celery
from flask import Flask
from api.urls import routes
from flask_restful import Api
from flask_cors import CORS

def flask_cors(app):
  CORS(app)
  return app

def flask_instance(flask=Flask):
  app = flask(__name__)
  return app

def flask_restful(app):
  api = Api(app)
  api.prefix = '/api'
  return api

def application():
  app = flask_instance()
  flask_cors(app)
  api = flask_restful(app)
  routes(api)
  return app