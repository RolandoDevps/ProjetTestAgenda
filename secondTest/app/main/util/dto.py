
from flask_restplus import Namespace, fields


class ContactDto:
    api = Namespace('contact', description='contact related operations')
    contact = api.model('contacts', {
        'email': fields.String(required=True, description='contact email address'),
        'lastname': fields.String(required=True, description='contact lastname'),
        'firstname': fields.String(required=True, description='contact firstname'),
        'phonenumber': fields.Date(required=True, description='contact phonenumber')
    })
