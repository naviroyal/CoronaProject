import React from 'react';
import './countryDiv.css';
import CaseChart from '../CaseChart/CaseChart';
import {Container, Row , Col} from 'react-bootstrap';



function CountryDiv(props){
    if(props.stats==='states')
    {
        return (
            <Container fluid>
                <Row className='today-row justify-content-center'>
                    <Col md={2} sm={4} xs={4} className="confirmed">
                        <p className="head-font">Total Cases</p>
                        <p className="body-font">{props.confirmed}</p>
                        {/* <CaseChart chartData={confirmed} dates ={dates} color="#005C25"/> */}
                    </Col>
                    <Col md={2} sm={4} xs={4} className="active">
                        <p className="head-font">Active Cases</p>
                        <p className="body-font"> {props.active}</p>
                        {/* <CaseChart chartData={active} dates ={dates} color="#005C25"/> */}
                    </Col>
                    <Col md={2} sm={4} xs={4} className="recovered ">
                        <p className="head-font">Recovered</p>
                        <p className="body-font">{props.recovered}</p>
                        {/* <CaseChart chartData={recovered} dates ={dates} color="#005C25"/> */}
                    </Col>
                    <Col md={2} sm={4} xs={4} className="deaths">
                        <p className="head-font">Deaths</p>
                        <p className="body-font">{props.death}</p>
                        {/* <CaseChart chartData={deaths} dates ={dates} color="#005C25"/> */}
                    </Col>
                </Row>
            </Container>
        );
    }
    else
    {
        const chartData=props.stats;
        if(chartData && chartData.length!==undefined) {
            let confirmed=[], deaths=[],recovered=[],active=[], dates=[];
            chartData.forEach((data) =>{
                confirmed.push(data.confirmed);
                deaths.push(data.deaths);
                recovered.push(data.recovered);
                active.push(data.confirmed - data.recovered - data.deaths);
                dates.push(data.date);
            })
        return (
            <Container fluid>
                <Row className='today-row justify-content-center'>
                    <Col md={2} sm={4} xs={4} className="confirmed">
                        <p className="head-font">Total Cases</p>
                        <p className="body-font">{props.confirmed}</p>
                        <CaseChart chartData={confirmed} dates ={dates} color="#005C25"/>
                    </Col>
                    <Col md={2} sm={4} xs={4} className="active">
                        <p className="head-font">Active Cases</p>
                        <p className="body-font"> {props.active}</p>
                        <CaseChart chartData={active} dates ={dates} color="#005C25"/>
                    </Col>
                    <Col md={2} sm={4} xs={4} className="recovered ">
                        <p className="head-font">Recovered</p>
                        <p className="body-font">{props.recovered}</p>
                        <CaseChart chartData={recovered} dates ={dates} color="#005C25"/>
                    </Col>
                    <Col md={2} sm={4} xs={4} className="deaths">
                        <p className="head-font">Deaths</p>
                    <p className="body-font">{props.death}</p>
                    <CaseChart chartData={deaths} dates ={dates} color="#005C25"/>
                    </Col>
                </Row>
            </Container>
        );
    }
    else{
        return (<></>);
    }
   
}
}


export default CountryDiv;