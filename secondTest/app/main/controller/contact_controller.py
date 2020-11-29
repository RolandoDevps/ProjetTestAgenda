from flask import request
from flask_restplus import Resource

from ..util.dto import ContactDto
from ..service.contact_service import create_new_contact, get_all_contacts, get_a_contact, update_a_contact, delete_a_contact, ContactHelper

api = ContactDto.api
_contact = ContactDto.contact


@api.route('/')
class ContactList(Resource):
    @api.doc('list_of_registered_contacts')
    @api.marshal_list_with(_contact, envelope='data')
    def get(self):
        """List all registered contacts"""
        return ContactHelper.list_of_contact()

    @api.response(201, 'Contact successfully created.')
    @api.doc('create a new contact')
    @api.expect(_contact, validate=True)
    def post(self):
        """Creates a new Contact """
        data = request.json
        return create_new_contact(data=data)


@api.route('/<phonenumber>')
@api.param('phonenumber', 'The Contact phonenumber')
@api.response(404, 'Contact not found.')
class Contact(Resource):
    @api.doc('get a contact')
    @api.marshal_with(_contact)
    def get(self, phonenumber):
        """get a contact given its phonenumber"""
        contact = ContactHelper.get_contact(phonenumber)
        if not contact:
            api.abort(404)
        else:
            return contact

    @api.doc('set a contact')
    def put(self, phonenumber):
        """set a contact given its phonenumber"""
        post_data = request.json
        return ContactHelper.update_contact(data=post_data)
        
    @api.doc('delete a contact')
    def delete(self, phonenumber):
        """delete a contact given its phonenumber"""
        return ContactHelper.delete_contact(phonenumber=phonenumber)