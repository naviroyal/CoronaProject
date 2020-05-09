import React from 'react';
import '../CountryDiv/countryDiv.css';
import CaseChart from '../CaseChart/CaseChart';
import {Container, Row , Col} from 'react-bootstrap';



function Comparison(props){
        const chartData1=props.stats1;
        const chartData2=props.stats2;
        if(chartData1 && chartData1.length!==undefined) {
            let confirmed1=[], deaths1=[],recovered1=[],active1=[], dates1=[];
            chartData1.forEach((data) =>{
                confirmed1.push(data.confirmed);
                deaths1.push(data.deaths);
                recovered1.push(data.recovered);
                active1.push(data.confirmed - data.recovered - data.deaths);
                dates1.push(data.date);
            })
            if(chartData2 && chartData2.length!==undefined) {
                let confirmed2=[], deaths2=[],recovered2=[],active2=[], dates2=[];
                chartData2.forEach((data) =>{
                    confirmed2.push(data.confirmed);
                    deaths2.push(data.deaths);
                    recovered2.push(data.recovered);
                    active2.push(data.confirmed - data.recovered - data.deaths);
                    dates2.push(data.date);
                })
        return (
            <Container fluid>
                <Row className='today-row justify-content-center'>
                    <Col md={2} sm={4} xs={5} className="confirmed">
                        <p className="head-font">Total Cases</p>
                        {/* <div className="cases-styling">
                                <p className="body-font">{props.selectedOneCountry} </p>
                                <p className="body-font">{props.confirmedOne}</p>
                        </div>
                        <div className="cases-styling">
                                <p className="body-font">{props.selectedTwoCountry} </p>
                                <p className="body-font">{props.confirmedTwo}</p>
                        </div> */}
                        <div>
                            <p style={{float:'left'}}>{props.selectedOneCountry}</p>
                            <p >{props.confirmedOne}</p>
                            <CaseChart chartData={confirmed1} dates ={dates1} color='#4285f4'/>    
                        </div>
                        <div>
                            <p style={{float:'left'}}>{props.selectedTwoCountry}</p>
                            <p className="body-font">{props.confirmedTwo}</p>
                            <CaseChart chartData={confirmed2} dates ={dates2} color="purple"/>
                        </div>
                        
                    </Col>
                    <Col md={2} sm={4} xs={5} className="active">
                        <p className="head-font">Active Cases</p>
                        <div>
                            <p style={{float:'left'}}>{props.selectedOneCountry}</p>
                            <p >{props.activeOne}</p>
                            <CaseChart chartData={active1} dates ={dates1} color='#4285f4'/>    
                        </div>
                        <div>
                            <p style={{float:'left'}}>{props.selectedTwoCountry}</p>
                            <p className="body-font">{props.activeTwo}</p>
                            <CaseChart chartData={active2} dates ={dates2} color="purple"/>
                        </div>
                    </Col>
                    <Col md={2} sm={4} xs={5} className="recovered ">
                        <p className="head-font">Recovered</p>
                        <div>
                            <p style={{float:'left'}}>{props.selectedOneCountry}</p>
                            <p >{props.recoveredOne}</p>
                            <CaseChart chartData={recovered1} dates ={dates1} color='#4285f4'/>    
                        </div>
                        <div>
                            <p style={{float:'left'}}>{props.selectedTwoCountry}</p>
                            <p className="body-font">{props.recoveredTwo}</p>
                            <CaseChart chartData={recovered2} dates ={dates2} color="purple"/>
                        </div>
                    </Col>
                    <Col md={2} sm={4} xs={5} className="deaths">
                        <p className="head-font">Deaths</p>
                        <div>
                            <p style={{float:'left'}}>{props.selectedOneCountry}</p>
                            <p >{props.deathOne}</p>
                            <CaseChart chartData={deaths1} dates ={dates1} color='#4285f4'/>    
                        </div>
                        <div>
                            <p style={{float:'left'}}>{props.selectedTwoCountry}</p>
                            <p className="body-font">{props.deathTwo}</p>
                            <CaseChart chartData={deaths2} dates ={dates2} color="purple"/>
                        </div>
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


export default Comparison;