from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
import os
from config import Config
from flask_migrate import Migrate

app = Flask(__name__)

#app.config.from_object(os.environ['APP_SETTINGS'])
app.config.from_object(Config)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
migrate = Migrate(app, db)

from app import routes, models