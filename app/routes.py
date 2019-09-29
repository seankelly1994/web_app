from app import app
from flask import Blueprint, jsonify, request
from app import db
from app.models import Client

@app.route("/")
def hello():
    return "Hello World!"

@app.route('/create_client', methods=['POST'])
def add_client():
    client_data = request.get_json()
    
    new_client = Client(first_name=client_data['first_name'], 
                        last_name=client_data['last_name'],
                        email_address=client_data['email_address'], 
                        business_phone=client_data['business_phone']
                        )

    #Commit the session
    db.session.add(new_client)
    db.session.commit()

    return 'Done', 201

@app.route('/clients')
def clients():
    client_list = Client.query.all()
    clients = []

    for client in client_list:
        clients.append({'first_name': client.first_name, 
                        'last_name': client.last_name, 
                        'email_address': client.email_address,
                        'business_phone': client.business_phone}
                        )

    return  jsonify({'clients': clients})

if __name__ == '__main__':
    app.run()