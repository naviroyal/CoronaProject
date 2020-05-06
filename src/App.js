import React,{useEffect, useState} from 'react';
import './App.css';
import {countries} from 'country-data';
import Header from './components/Header/header';
import DropDown from './components/DropDowns/dropdown';
import CountryDiv from './components/CountryDiv/countryDiv';
import {StateDropdown} from 'react-india-state-region-selector';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/footer';
 
function App() {
  const [stateSelect, setStateSelect] = useState('');
  const [countrySelect,setCountrySelect ] = useState(null);
  const [selectedCountryData,setSelectedCountryData]=useState(null);
  const [selectedStateData,setSelectedStateData]=useState(null);
   
  let options = [ "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa",
  "Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala",
  "Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Odisha","Punjab",
  "Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttarakhand","Uttar Pradesh","West Bengal",
  "Chandigarh","Delhi","Puducherry"]

  const changeCountryHandler = (country) =>{
        setCountrySelect(countries[country].name);
        let url= 'https://pythoncoronaapi.herokuapp.com/country/';
        console.log(countries[country].name);
        url=url+countries[country].name;
        fetch(url).then(res => res.json()).then(data => {
          
          setSelectedCountryData(data);
        });
  }

  const stateChangeHandler = (state) =>{
    setStateSelect(state.value);
    let url= 'https://pythoncoronaapi.herokuapp.com/state/';
//    console.log(state.value);
    url=url+state.value;
//    console.log(url);
    fetch(url).then(res => res.json()).then(data => {
      setSelectedStateData(data);
//      console.log(data.state);
    });
}

  return (
    <div className="App">
         <Header/>
         <hr className="top-line"></hr>
         <h1 className="india-heading">Get Corona Results Counrty Wise </h1>
        <div>
          <DropDown changeCountryHandler={changeCountryHandler}/>
          {selectedCountryData!=null? <CountryDiv confirmed={selectedCountryData['confirmed']}
                  active={selectedCountryData['active']}
                  recovered={selectedCountryData['recovered']}
                  death={selectedCountryData['deaths']}/>:null}
                <hr className="line"></hr>
        </div>        
        <div className="state-container">
          <h1 className="india-heading">Get Results StateWise For India</h1>
          <Dropdown options={options} placeholderClassName='myPlaceholderClassName' menuClassName='myMenuClassName' controlClassName='myControlClassName' className="myClassName state-dropdown" onChange={(val)=>stateChangeHandler(val)} value={stateSelect} placeholder="Select a State" />
          { selectedStateData!=null? <CountryDiv confirmed={selectedStateData['Total']} 
                  active={selectedStateData['Total']-selectedStateData['Cured']-selectedStateData['Death']}
                  recovered={selectedStateData['Cured']}
                  death={selectedStateData['Death']}/>:null}
          <hr className="line"></hr>
        </div>
        <Footer/>
        
    </div>
  );
}

export default App;
