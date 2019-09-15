from app import db

class Client(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50))

    def __repr__(self):
        return '<Client()>'.format(self.first_name)