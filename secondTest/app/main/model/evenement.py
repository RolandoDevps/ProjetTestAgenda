import datetime
from flask_restplus import fields
from ..config import key

class Evenement(db.Model):
    """ Contact Model for storing contact """
    __tablename__ = "evenements"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    titre = db.Column(db.String(255), nullable=False)
    date = db.Column(db.DateTime, nullable=False)
    lieu = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(50), nullable=False)
    registered_on = db.Column(db.DateTime, nullable=False)

    def __repr__(self):
        return "<Evenement: titre: {} Date: {} />".format(self.titre, self.date)

class EvenementSchema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = (
            "titre", "date", "lieu"
            )
