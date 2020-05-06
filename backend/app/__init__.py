from flask import Flask
# from flask_cors import CORS
app = Flask(__name__, static_folder="../../build", static_url_path='/')
app.debug = True
# CORS(app,support_credentials=True)

from app import routes