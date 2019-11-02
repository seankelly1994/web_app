from app import app
from flask import Blueprint, jsonify, request
from app import db
from app.models import Client
from app.models import User
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import current_user, login_user, logout_user
from flask_jwt_extended import (create_access_token, create_refresh_token, 
                                jwt_required, jwt_refresh_token_required, get_jwt_identity, get_raw_jwt)
from flask_restful import Resource, reqparse
import json
import time

@app.route("/")
@app.route('/index')
def hello():
    return "Hello World!"

@app.route('/api/login', methods=['POST'])
def login_user():
    # get post data
    user_data = request.get_json()
    response_object = {
        'status': 'fail',
        'message': 'Invalid payload.'
    }
    if not user_data:
        return jsonify(response_object), 400

    email = user_data.get('email')
    password = user_data.get('password')

    try:
        # fetch the user data
        user = User.query.filter_by(email_address=email).first()

        if user and check_password_hash(user.password, password):
            #auth_token = user.encode_auth_token(user.id)
            access_token = create_access_token(identity=user.id)

            print(access_token)
            if access_token:
                response_object['status'] = 'success'
                response_object['message'] = 'Successfully logged in.'
                response_object['auth_token'] = access_token

                return jsonify(response_object), 200
        else:
            response_object['message'] = 'User does not exist.'
            return jsonify(response_object), 404
    except Exception:
        response_object['message'] = 'Try again.'
        return jsonify(response_object), 500


@app.route('/api/logout', methods=['GET'])
def logout_user():
    auth_header = request.headers.get("Authorization")
    response_object = {
        "status": "fail",
        "message": "Provide a valid auth token"
    }

    if auth_header:
        auth_token = auth_header.split(" ")[1]
        resp = User.decode_auth_token(auth_token)
        if not isinstance(resp, str):
            response_object["status"] = "success"
            response_object["message"] = "Successfully logged out"
            return jsonify(response_object), 200
        else:
            response_object["message"] = resp
            return jsonify(response_object), 401
    else:
        return jsonify(response_object), 403


@app.route('/api/register', methods=['POST', 'GET'])
def register_user():
    # get post data
    user_data = request.get_json()
    print(user_data)
    response_object = {
        'status': 'fail',
        'message': 'Invalid payload.'
    }
    if not user_data:
        return jsonify(response_object), 400

    new_user = User(
                first_name = user_data['firstName'],
                last_name = user_data['lastName'],
                username = user_data['email'],
                email_address = user_data['email'],
                password = generate_password_hash(user_data['password'])
        )
    
    try:
        # check for existing user
        #user = User.query.filter_by(email_address == email)
        db.session.add(new_user)
        db.session.commit()
        # generate auth token
        auth_token = new_user.encode_auth_token(new_user.id)
        response_object['status'] = 'success'
        response_object['message'] = 'Successfully registered.'
        response_object['auth_token'] = auth_token.decode()

        return jsonify(response_object), 201
    # handler errors
    except:
        db.session.rollback()
        return jsonify(response_object), 400


@app.route('/api/create_client', methods=['POST'])
def create_client():
    client_data = request.get_json()
    
    new_client = Client(
                        first_name=client_data['firstName'], 
                        last_name=client_data['lastName'],
                        email_address=client_data['emailAddress'], 
                        business_phone=client_data['businessPhone']
                        )

    #Commit the session
    db.session.add(new_client)
    db.session.commit()

    return 'Done', 201

@app.route('/api/clients')
@jwt_required
def clients():
    client_list = Client.query.all()
    #client_list = Client.query.filter_by(user_id = User.id)
    clients = []

    for client in client_list:
        clients.append(
                        {
                            'first_name': client.first_name, 
                            'last_name': client.last_name, 
                            'email_address': client.email_address,
                            'business_phone': client.business_phone
                        }
            
                )

    return  jsonify({'clients': clients})

@app.route('/api/users')
def users():
    user_list = User.query.all()
    users = []

    for user in user_list:
        users.append({
            'first_name': user.first_name,
            'last_name': user.last_name,
            'email_address': user.email_address,
            'username': user.username,
            'id': user.id
        })
    
    return jsonify({'users': users})
    
# @app.route('/api/user')
# def get_user():
#     user = request.get_json()

#     response_object = {
#         'status': 'fail',
#         'message': 'Invalid payload.'
#     }
#     if not user:
#         return jsonify(response_object), 400
    
#     user = User.find_by_id(user.id)
#     print(user)

#     return jsonify({'user': user})

if __name__ == '__main__':
    app.run()