from app import app
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