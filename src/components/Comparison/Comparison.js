import React from 'react';
import '../CountryDiv/countryDiv.css';
import CaseChart from '../CaseChart/CaseChart';
import {Container, Row , Col} from 'react-bootstrap';
import Moment from 'moment';


function Comparison(props){
        const chartData1=props.stats1;
        const chartData2=props.stats2;
        const startDate=Moment(props.startDate).format('YYYY-M-D');
        let enterOneDate=false;
        let enterTwoDate=false;
        let needtochecklastone=true;
        let needtochecklasttwo=true;
        const endDate=Moment(props.endDate).format('YYYY-M-D');

        if(Date.parse(startDate)>=Date.parse(endDate))
        {
            alert("Start Date should be less than End Date");
        }

        if(chartData1 && chartData1.length!==undefined) {
            let confirmed1=[],confirmedOneSum=0, deaths1=[],deathOneSum=0,recovered1=[],recoveredOneSum=0,active1=[],activeOneSum=0, dates1=[];
            chartData1.forEach((data,index) =>{
                if(startDate == data.date)
                {
                    enterOneDate=true;
                    confirmedOneSum+=data.confirmed;
                    activeOneSum+=(data.confirmed - data.recovered - data.deaths);
                    recoveredOneSum+=data.recovered;
                    deathOneSum+=data.deaths;
                }
                if(enterOneDate==true)
                {
                    confirmed1.push(data.confirmed);
                    deaths1.push(data.deaths);
                    recovered1.push(data.recovered);
                    active1.push(data.confirmed - data.recovered - data.deaths);
                    dates1.push(data.date);
                    
                }
                if(data.date==endDate || (chartData1.length-1 == index && needtochecklastone==true))
                {
                    
                    enterOneDate=false;
                    needtochecklastone=false;
                    confirmedOneSum=data.confirmed-confirmedOneSum;
                    activeOneSum=(data.confirmed - data.recovered - data.deaths)-activeOneSum;
                    recoveredOneSum=data.recovered-recoveredOneSum;
                    deathOneSum=data.deaths-deathOneSum;
                    
                }
            })
            if(chartData2 && chartData2.length!==undefined) {
                let confirmed2=[], deaths2=[],recovered2=[],active2=[], dates2=[],confirmedTwoSum=0
                ,activeTwoSum=0,recoveredTwoSum=0,deathTwoSum=0;
                chartData2.forEach((data,index) =>{
                    if(startDate == data.date)
                    {
                        enterTwoDate=true;
                        confirmedTwoSum+=data.confirmed;
                        activeTwoSum+=(data.confirmed - data.recovered - data.deaths);
                        recoveredTwoSum+=data.recovered;
                        deathTwoSum+=data.deaths;
                    }
                    if(enterTwoDate==true)
                    {
                        confirmed2.push(data.confirmed);
                        deaths2.push(data.deaths);
                        recovered2.push(data.recovered);
                        active2.push(data.confirmed - data.recovered - data.deaths);
                        dates2.push(data.date);
                    }
                    if(endDate==data.date || (chartData2.length-1 == index && needtochecklasttwo==true))
                    {
                        enterTwoDate=false;
                        needtochecklasttwo=false;
                        confirmedTwoSum=data.confirmed-confirmedTwoSum;
                        activeTwoSum=(data.confirmed - data.recovered - data.deaths)-activeTwoSum;
                        recoveredTwoSum=data.recovered-recoveredTwoSum;
                        deathTwoSum=data.deaths-deathTwoSum;
                    }
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
                            <p >{confirmedOneSum}</p>
                            <CaseChart chartData={confirmed1} dates ={dates1} color='#4285f4'/>    
                        </div>
                        <div>
                            <p style={{float:'left'}}>{props.selectedTwoCountry}</p>
                            <p className="body-font">{confirmedTwoSum}</p>
                            <CaseChart chartData={confirmed2} dates ={dates2} color="purple"/>
                        </div>
                        
                    </Col>
                    <Col md={2} sm={4} xs={5} className="active">
                        <p className="head-font">Active Cases</p>
                        <div>
                            <p style={{float:'left'}}>{props.selectedOneCountry}</p>
                            <p >{activeOneSum}</p>
                            <CaseChart chartData={active1} dates ={dates1} color='#4285f4'/>    
                        </div>
                        <div>
                            <p style={{float:'left'}}>{props.selectedTwoCountry}</p>
                            <p className="body-font">{activeTwoSum}</p>
                            <CaseChart chartData={active2} dates ={dates2} color="purple"/>
                        </div>
                    </Col>
                    <Col md={2} sm={4} xs={5} className="recovered ">
                        <p className="head-font">Recovered</p>
                        <div>
                            <p style={{float:'left'}}>{props.selectedOneCountry}</p>
                            <p >{recoveredOneSum}</p>
                            <CaseChart chartData={recovered1} dates ={dates1} color='#4285f4'/>    
                        </div>
                        <div>
                            <p style={{float:'left'}}>{props.selectedTwoCountry}</p>
                            <p className="body-font">{recoveredTwoSum}</p>
                            <CaseChart chartData={recovered2} dates ={dates2} color="purple"/>
                        </div>
                    </Col>
                    <Col md={2} sm={4} xs={5} className="deaths">
                        <p className="head-font">Deaths</p>
                        <div>
                            <p style={{float:'left'}}>{props.selectedOneCountry}</p>
                            <p >{deathOneSum}</p>
                            <CaseChart chartData={deaths1} dates ={dates1} color='#4285f4'/>    
                        </div>
                        <div>
                            <p style={{float:'left'}}>{props.selectedTwoCountry}</p>
                            <p className="body-font">{deathTwoSum}</p>
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