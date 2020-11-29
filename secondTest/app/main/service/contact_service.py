
import datetime
import os

from flask import request
from sqlalchemy.exc import (DatabaseError, IntegrityError)
from sqlalchemy import or_

from app.main import db
from app.main.model.contact import Contact, ContactSchema

# C -Create
def create_new_contact(data):
    contact = Contact.query.filter_by(phonenumber=data['phonenumber']).first()
    if not contact:
        new_contact = Contact(
            email=data['email'],
            lastname=data['lastname'],
            firstname=data['firstname'],
            phonenumber=data['phonenumber'],
            registered_on=datetime.datetime.utcnow()
        )
        save_changes(new_contact)
        response_object = {
            'status': 'success',
            'message': 'contact enregistré avec succès.'
        }
        return response_object
    else:
        response_object = {
            'status': 'fail',
            'message': 'Contact déja existant.',
        }
        return response_object, 409

# R -Read
def get_all_contacts():
    return Contact.query.all()
def get_a_contact(phonenumber):
    return Contact.query.filter_by(phonenumber=phonenumber).first()

# U -Update
def update_a_contact(phonenumber, data):

    contact = Contact.query.filter_by(phonenumber=phonenumber).first()
    
    if not contact:
        response_object = {
            'status': 'fail',
            'message': 'contact not exists.',
        }
        return response_object, 404

    else:
        contact.lastname=data['lastname']
        contact.firstname=data['firstname']
        db.session.commit()
        response_object = {
            'status': 'success',
            'message': 'contact updated successfully.',
        }
        return response_object, 200

# D -Delete    
def delete_a_contact(phonenumber):

    contact = Contact.query.filter_by(phonenumber=phonenumber).first()

    if not contact:
        response_object = {
            'status': 'fail',
            'message': 'contact not exists.',
        }
        return response_object, 404
    else:
        contact.delete()
        response_object = {
            'status': 'success',
            'message': 'contact deleted uccessfully.',
        }
        return response_object, 202

def save_changes(data):
    db.session.add(data)
    db.session.commit()


class ContactHelper:    
    @classmethod
    def get_contact(phonenumber):
        try:
            exist_contact = db.session.query(Contact).filter(Contact.phonenumber == str(phonenumber)).first()

            if not exist_contact:
                return {'status': 'not-exist', 'message': 'contact non trouvé'}, 404
            contact = ContactSchema(many = False).dump(exist_contact)

            return contact,201
        except DatabaseError as e:
            db.session.rollback()
            return {'status': 'fail', 'message': 'erreur provenant de la base de données'}, 409
        except Exception as e:
            print(str(e))
            return {'status': 'fail', 'message': 'erreur provenant du serveur'}, 500

    @classmethod
    def list_of_contact() -> (dict, int):
        try:
            record_query = db.session.query(Contact).order_by(Contact.id.asc())

            record_query = record_query.paginate(page=int(request.args.get('page', 1)),
                                                 error_out=False,
                                                 max_per_page=int(request.args.get('per_page', 15)))
            schema = ContactSchema(many=True)
            result = dict(data=schema.dump(record_query.items),
                          total=record_query.total,
                          pages=record_query.pages,
                          current_page=record_query.page,
                          per_page=record_query.per_page)
            return result, 200

        except Exception as e:
            print(str(e))
            return {'status': 'fail', "message": 'une erreur provenant du serveur'}, 500

    @classmethod
    def delete_contact(phonenumber) -> (dict, int):
        try:
            exist_contact= Contact.query.filter_by(phonenumber=phonenumber).first()
            if not exist_contact:
                return {'status': 'not-exist', 'message': 'contact non trouvé'}, 404

            db.session.commit()
            return {'status': 'success', 'message': 'contact supprimé avec succès'}, 200

        except DatabaseError as e:
            db.session.rollback()
            return {'status': 'fail', 'message': 'une erreur provenant de la base de données'}, 409
        except Exception as e:
            print(str(e))
            return {'status': 'fail', "message": 'une erreur provenant du serveur'}, 500

    @classmethod
    def update_contact(data):
        try:
            exist_contact = db.session.query(Contact).filter(Contact.phonenumber == str(data["phonenumber"])).first()

            if not exist_contact:
                return {'status': 'not-exist', 'message': 'contact non trouvé'}, 404
            else:
                exist_contact.firstname = data["firstname"] or exist_contact.firstname
                exist_contact.lastname = data["lastname"] or exist_contact.lastname
                exist_contact.email = data["email"] or exist_contact.email

            db.session.commit()
            return {
                'status': 'success',
                'message': 'information mis à jour avec succès',
                'Contact': ContactSchema().dump(exist_contact)

            },201

        except DatabaseError as e:
            db.session.rollback()
            return {'status': 'fail', 'message': 'une erreur provenant de la base de données'}, 409
        except Exception as e:
            print(str(e))
            return {'status': 'fail', "message": 'une erreur provenat du serveur'}, 500