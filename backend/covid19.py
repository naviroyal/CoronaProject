# from app import app


from flask import Flask
# from flask_cors import CORS
app = Flask(__name__, static_folder="../../build", static_url_path='/')
app.debug = True
# CORS(app,support_credentials=True)
#
# from app import routes


# from app import app
from covid import Covid
from covid_india import states
# from flask_cors import cross_origin


@app.route('/')
# @cross_origin()
def index():
    return app.send_static_file('index.html')


@app.route('/country/<country>')
# @cross_origin()
def getdata(country):
    covid = Covid()
    # print(country)
    # country=country.replace('-',' ')
    # print(country)
    return {'country':covid.get_status_by_country_name(country)}


@app.route('/state/<state>')
# @cross_origin()
def get_state(state):
    return {'state':states.getdata(state)}