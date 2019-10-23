from flask_restful import Resource, reqparse
from app.models import User, RevokedToken
from flask_jwt_extended import (create_access_token, create_refresh_token, 
                                jwt_required, jwt_refresh_token_required, get_jwt_identity, get_raw_jwt)

parser = reqparse.RequestParser()
parser.add_argument('username', help = 'This field cannot be blank', required = True)
parser.add_argument('password', help = 'This field cannot be blank', required = True)

class UserRegistration(Resource):
    def post(self):
        user_data = parser.parse_args()

        if User.find_by_username(user_data['username']):
            return {'message': 'User {} already exists'.format(user_data['username'])}

        new_user = User(
            first_name = user_data['firstName'],
            last_name = user_data['lastName'],
            email_address = user_data['email'],
            username = user_data['username'],
            password = User.generate_hash(user_data['password'])
        )

        try:
            db.session.add(new_user)
            db.session.commit()
            access_token = create_access_token(identity = user_data['username'])
            refresh_token = create_refresh_token(identity = user_data['username'])
            return{
                'message': 'User {} was created'.format(user_data['username']),
                'access_token': access_token,
                'refresh_token': refresh_token
            }
        except:
            return {'message': 'Something went wrong'}, 500

        return user_data


class UserLogin(Resource):
    def post(self):
        user_data = parser.parse_args()
        current_user = User.find_by_username(user_data['username'])
        
        if not current_user:
            return {'message': 'User {} does not exist'.format(user_data['username'])}

        if User.verify_hash(data['password']) == current_user.password:
            access_token = create_access_token(identity = user_data['username'])
            refresh_token = create_refresh_token(identity = user_data['username'])
            return {
                'message': 'Logged in as {}'.format(current_user.username),
                'access_token': access_token,
                'refresh_token': refresh_token
            }
        else:
            return {'message': 'Wrong Credentials'}

        return user_data
      
class UserLogoutAccess(Resource):
    @jwt_required
    def post(self):
        jti = get_raw_jwt()['jti']
        try:
            revoked_token = RevokedToken(jti = jti)
            revoked_token.add()
            return {'message': 'Access token has been revoked'}
        except:
            return {'message': 'Something went wrong'}, 500
      
      
class UserLogoutRefresh(Resource):
    @jwt_refresh_token_required
    def post(self):
        jti = get_raw_jwt()['jti']
        try:
            revoked_token = RevokedToken(jti = jti)
            revoked_token.add()
            return {'message': 'Refresh token has been revoked'}
        except:
            return {'message': 'Something went wrong'}, 500
      
      
class TokenRefresh(Resource):
    @jwt_refresh_token_required
    def post(self):
        current_user = get_jwt_identity()
        access_token = create_access_token(identity = current_user)
        return {'access_token': access_token}
      
      
class AllUsers(Resource):
    def get(self):
        return User.return_all()
    
    def delete(self):
        return User.delete_all()
      
      
class SecretResource(Resource):
    @jwt_required
    def get(self):
        return {
            'answer': 42
        }