
from .. import db, ma

import datetime
from flask_restplus import fields
from ..config import key

class Contact(db.Model):
    """ Contact Model for storing contact """
    __tablename__ = "contacts"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String(255), unique=True, nullable=False)
    lastname = db.Column(db.String(50), nullable=False)
    firstname = db.Column(db.String(50), nullable=False)
    phonenumber = db.Column(db.String(255), unique=True, nullable=False)
    registered_on = db.Column(db.DateTime, nullable=False)

    def __repr__(self):
        return "<Contact: Prénom: {} Nom: {} />".format(self.firstname, self.lastname)

class ContactSchema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = (
            "phonenumber", "email", "lastname","firstname"
            )
