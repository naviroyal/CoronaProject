import React from 'react';
import './header.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'
function Header(){
    return(
        <div className="Header">
            <h1><span >&#9760;</span><span style={{color:'grey'}}>Covid19 </span><span style={{color:'lightseagreen'}}> Tracker</span></h1>
        </div>
    );
}

export default Header;