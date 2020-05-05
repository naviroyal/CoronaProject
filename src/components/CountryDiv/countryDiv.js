import React from 'react';
import './countryDiv.css';
import {Container, Row , Col} from 'react-bootstrap';
function CountryDiv(props){
    return (
        <Container fluid>
            <Row className='today-row justify-content-center'>
                <Col md={2} sm={4} xs={4} className="confirmed">
                    <p className="head-font">Total Cases</p>
                    <p className="body-font">{props.confirmed}</p>
                </Col>
                <Col md={2} sm={4} xs={4} className="active">
                    <p className="head-font">Active Cases</p>
                    <p className="body-font"> {props.active}</p>
                </Col>
                <Col md={2} sm={4} xs={4} className="recovered ">
                    <p className="head-font">Recovered</p>
                    <p className="body-font">{props.recovered}</p>
                </Col>
                <Col md={2} sm={4} xs={4} className="deaths">
                    <p className="head-font">Deaths</p>
                <p className="body-font">{props.death}</p>
                </Col>
            </Row>
        </Container>
    //     <div className="info-container">
    //     <div className="confirmed">
    //         <p className="head-font">Total Cases</p>
    //         <p className="body-font">{props.confirmed}</p>
    //     </div>
    //     <div className="active">
    //         <p className="head-font">Active Cases</p>
    //         <p className="body-font"> {props.active}</p>
    //     </div>
    //     <div className="recovered">
    //         <p className="head-font">Recovered</p>
    //         <p className="body-font">{props.recovered}</p>
    //     </div>
    //     <div className="deaths">
    //         <p className="head-font">Deaths</p>
    //         <p className="body-font">{props.death}</p>
    //     </div>
    // </div>
    );
}

export default CountryDiv;