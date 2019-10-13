from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
import os
import datetime
from config import Config
from flask_migrate import Migrate
import json
from flask_login import LoginManager
from flask_restful import Api
from app import resources

app = Flask(__name__)
api = Api(app)

#app.config.from_object(os.environ['APP_SETTINGS'])
app.config.from_object(Config)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'something_secret'
db = SQLAlchemy(app)
migrate = Migrate(app, db)
login = LoginManager(app)

api.add_resource(resources.UserRegistration, '/registration')
api.add_resource(resources.UserLogin, '/login')
api.add_resource(resources.UserLogoutAccess, '/logout/access')
api.add_resource(resources.UserLogoutRefresh, '/logout/refresh')
api.add_resource(resources.TokenRefresh, '/token/refresh')
api.add_resource(resources.AllUsers, '/users')
api.add_resource(resources.SecretResource, '/secret')


from app import routes, models