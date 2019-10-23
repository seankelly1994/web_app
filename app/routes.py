from app import app, bcrypt
from flask import Blueprint, jsonify, request
from app import db
from app.models import Client
from app.models import User
#from werkzeug.security import generate_password_hash
from flask_login import current_user, login_user, logout_user
from flask_jwt_extended import (create_access_token, create_refresh_token, 
                                jwt_required, jwt_refresh_token_required, get_jwt_identity, get_raw_jwt)
from flask_restful import Resource, reqparse
import json
from flask_bcrypt import generate_password_hash

@app.route("/")
@app.route('/index')
def hello():
    return "Hello World!"

@app.route('/login', methods=['POST'])
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
    print(password)
    try:
        # fetch the user data
        user = User.query.filter_by(email_address=email).first()
        hashed_password = user.password
        print(hashed_password)
        if user and bcrypt.check_password_hash(hashed_password, password):
            auth_token = user.encode_auth_token(user.id)
            if auth_token:
                response_object['status'] = 'success'
                response_object['message'] = 'Successfully logged in.'
                response_object['auth_token'] = auth_token.decode()
                return jsonify(response_object), 200
        else:
            response_object['message'] = 'User does not exist.'
            return jsonify(response_object), 404
    except Exception:
        response_object['message'] = 'Try again.'
        return jsonify(response_object), 500

@app.route('/register', methods=['POST'])
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
    print(new_user)
    
    try:
        # check for existing user
        #user = User.query.filter_by(email_address == email)

        print("Checking for existing user")
        print("Trying to add new user")
        db.session.add(new_user)
        db.session.commit()
        # generate auth token
        auth_token = new_user.encode_auth_token(new_user.email_address)
        response_object['status'] = 'success'
        response_object['message'] = 'Successfully registered.'
        response_object['auth_token'] = auth_token.decode()
        return jsonify(response_object), 201
    # handler errors
    except:
        db.session.rollback()
        return jsonify(response_object), 400


@app.route('/create_client', methods=['POST'])
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

@app.route('/clients')
def clients():
    #client_list = Client.query.all()
    client_list = Client.query.filter_by(user_id = User.id)
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



if __name__ == '__main__':
    app.run()