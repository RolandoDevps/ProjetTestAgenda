from flask_restplus import Api
from flask import Blueprint

from .main.controller.contact_controller import api as contact_ns
# from .main.controller.evenement_controller import api as evenement_ns

blueprint = Blueprint('api', __name__)

description = '''
    This is MK WBC AGENDA REST API. All request in regards to the application can be found here,
    in general most of the methods to manage system.
'''

api = Api(blueprint,
          title='API AGENDA MK WBC WITH FLASK RESTPLUS',
          version='1.0',
          description=description
          )

api.add_namespace(contact_ns, path='/contact')
# api.add_namespace(evenement_ns, path='/evenement')



