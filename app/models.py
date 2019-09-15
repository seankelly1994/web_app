from app import db

class Client(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50))
    last_name = db.Column(db.String(50))
    email_address = db.Column(db.String(50))
    business_phone = db.Column(db.String(10))

    def __repr__(self):
        return '<Client()>'.format(self.first_name)