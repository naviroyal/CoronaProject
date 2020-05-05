from app import app
from covid import Covid
from covid_india import states


@app.route('/country/<country>')
def getdata(country):
    covid = Covid()
    # print(country)
    # country=country.replace('-',' ')
    # print(country)
    return {'country':covid.get_status_by_country_name(country)}

@app.route('/state/<state>')
def get_state(state):
    return {'state':states.getdata(state)}