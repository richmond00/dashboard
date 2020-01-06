import React, { Component } from 'react';
import './Dashboard.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RankTable from './RankTable';
import PieChart from './PieChart';
import WeeklyLineChart from './WeeklyLineChart';
import axios from 'axios';
import defaultDataProcessing from './dataProcessing';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = { 
            isLoading: true,
            error: "",
            dailyAttendence: null,
            cumulativeAttendence: null,
            pieChartData: null,
            lineChartData: null
        };
    }

    async componentDidMount() {
        //this.loadData();
        let defaultData = await axios.get('../2019.json')
                                    .then( response => {
                                        let date = '20190104';
                                        return defaultDataProcessing(response, date);
                                    })
                                    .catch( error => {
                                        console.log('error: ', error);
                                    })
        
        const dailyAttendence = defaultData.dailyAttendence,
              cumulativeAttendence = defaultData.cumulativeAttendence,
              pieChartData  = defaultData.pieChartData,
              lineChartData = defaultData.lineChartData;
        
        this.setState({
            ...this.state, ...{
                isLoading: false,
                dailyAttendence,
                cumulativeAttendence,
                pieChartData,
                lineChartData
            }
        })
                                    
    }



    
    render() {
        const { isLoading, dailyAttendence, cumulativeAttendence, pieChartData } = this.state;

        return (
            <>
            <Row className="mt-3 bg-light">
                <Col xs={12} sm={4} md={4}>
                    <RankTable data={dailyAttendence}/>
                </Col>

                <Col xs={12} sm={4} md={4}>
                    <RankTable data={cumulativeAttendence}/>
                </Col>

                <Col xs={12} sm={4} md={4}>
                    <PieChart data={pieChartData} />
                </Col>
            </Row>
            
            <Row className="mt-3 bg-light">
                <Col xs={12} sm={12} md={12}>
                    <WeeklyLineChart />
                </Col>
            </Row>
            </>
        )
    }
}

export default Dashboard;