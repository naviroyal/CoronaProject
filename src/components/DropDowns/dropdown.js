import React from 'react';
import './dropdown.css';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';


function DropDown(props){
    return(
        <div className="dropdown-div">
           <ReactFlagsSelect searchable={true} searchPlaceholder="search for a country" 
                    selectedSize={20}
                    optionsSize={16} className="menu-flags dropdown"
                    onSelect={props.changeCountryHandler}/>
        </div>
         
    );
}

export default DropDown;