import React from 'react';
import './header.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'


function Header(){
    return(
            <div className="Header">
                <div>
                    <h1><span><img style={{padding:'0px 0px 6px 0px'}} alt="india-flag" src="logo192.png" height="34px" width="50px"/></span><span style={{color:'grey'}}>Covid19 </span><span style={{color:'lightseagreen'}}> Tracker</span></h1>
                </div>
                <div>
                <h3 className="slogan">Let us be kind with everyone fighting against Covid-19</h3>
          
                </div>
             </div>
    );
}

export default Header;