from app import app
from flask import Blueprint, jsonify, request
from app import db
from app.models import Client
from app.models import User
from werkzeug.security import generate_password_hash
from flask_login import current_user, login_user, logout_user

@app.route("/")
@app.route('/index')
def hello():
    return "Hello World!"

@app.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect('/clients')
    #if current_user.validate_on_submit():
     #   user = User.query.filter_by(username=username.data).first()
      #  if user is None or not user.check_password(password.data):
       #     return redirect('/auth')
        #login_user(user, remember=remember_me.data)
        return redirect('/clients')

@app.route('/create_client', methods=['POST'])
def create_client():
    client_data = request.get_json()
    
    new_client = Client(
                        first_name=client_data['firstName'], 
                        last_name=client_data['lastName'],
                        email_address=client_data['emailAddress'], 
                        business_phone=client_data['businessPhone'])

    #Commit the session
    db.session.add(new_client)
    db.session.commit()

    return 'Done', 201

@app.route('/clients')
def clients():
    client_list = Client.query.all()
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