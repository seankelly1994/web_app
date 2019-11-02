from app import app
from app import db
from werkzeug.security import check_password_hash
from passlib.hash import pbkdf2_sha256 as sha256
from app import bcrypt
import datetime
import jwt

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50))
    last_name = db.Column(db.String(50))
    email_address = db.Column(db.String(50))
    clients = db.relationship('Client', backref='owner', lazy='dynamic')
    username = db.Column(db.String(50))
    password = db.Column(db.String(120), nullable=False)

    def __repr__(self):
        return '<User {}'.format(self.username)

    def set_password(self, password):
        self.password_hash = bcrypt.generate_password_hash(password)

    def check_password(self, password):
        return bcrypt.check_password_hash(self.password_hash, password)

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()
    
    @classmethod
    def find_by_username(cls, username):
        return cls.query.filter_by(username=username).first()

    @classmethod
    def find_by_id(cls, id):
        return cls.query.filter_by(id=id).first()

    @classmethod
    def return_all(cls):
        def to_json(x):
            return {
                'username': x.username,
                'password': x.password
            }
        return {'users': list(map(lambda x: to_json(x), User.query.all()))}

    @staticmethod
    def decode_auth_token(auth_token):
        '''Decodes the auth token'''
        try:
            payload = jwt.decode(
                auth_token, app.config.get('SECRET_KEY'))
            return payload
        except jwt.ExpiredSignature:
            return 'Signature expired. Please Log in again.'
        except jwt.InvalidTokenError:
            return 'Invalid token. Please log in again'

    @classmethod
    def delete_all(cls):
        try:
            num_rows_deleted = db.session.query(cls).delete()
            db.session.commit()
            return {'message': '{} row(s) deleted'.format(num_rows_deleted)}
        except:
            return {'message': 'Something went wrong'}

    @staticmethod
    def generate_hash(password):
        return sha256.hash(password)

    @staticmethod
    def verify_hash(password, hash):
        return sha256.verify(password, hash)

    def encode_auth_token(self, id):
        '''Generates the jwt token'''
        try:
            payload = {
                'exp': datetime.datetime.utcnow() + datetime.timedelta(days=0, seconds=5),
                    'iat': datetime.datetime.utcnow(),
                    'sub': id
            }
            return jwt.encode(
                payload,
                app.config.get('SECRET_KEY'),
                algorithm='HS256'
            )
        except Exception as e:
            return e


class Client(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50))
    last_name = db.Column(db.String(50))
    email_address = db.Column(db.String(50))
    business_phone = db.Column(db.String(10))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    def __repr__(self):
        return '<Client()>'.format(self.first_name)

class RevokedTokenModel(db.Model):
    __tablename__ = 'revoked tokens'
    id = db.Column(db.Integer, primary_key=True)
    jti = db.Column(db.String(120))

    def add(self):
        db.session.add(self)
        db.session.commit()
    
    @classmethod
    def is_jti_blacklisted(cls, jti):
        query = cls.query.filter_by(jti=jti).first()

        return bool(query)
