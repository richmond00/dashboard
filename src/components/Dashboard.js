import axios from 'axios';
import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Attendance from './Attendance';
import Theaters from './Theaters';
import Trend from './Trend';

import getDefaultData, { getYesterday } from '../common/dataProcessing';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = { 
            isLoading: true,
            daily: null,
            cumulative: null,
            theaters: null,
            trend: null,
            error: "",
        };
    }

    async componentDidMount() {
        let defaultData = await axios.get('../2019.json')
                                     .then( response => {
                                         let date =  getYesterday(-1);
                                         return getDefaultData(response, date);
                                      })
                                     .catch( error => {
                                        console.log('error: ', error);
                                     })
        
        const daily = defaultData.daily,
              cumulative = defaultData.cumulative,
              theaters  = defaultData.theaters,
              trend = defaultData.trend;
        
        this.setState({
            ...this.state, ...{
                isLoading: false,
                daily,
                cumulative,
                theaters,
                trend
            }
        })
                                    
    }
    
    render() {
        const { isLoading, daily, cumulative, theaters, trend } = this.state;

        return (
            <>
            <Row className="mt-3 bg-light">
                <Col xs={12} sm={4} md={4}>
                    <Attendance data={daily}/>
                </Col>

                <Col xs={12} sm={4} md={4}>
                    <Attendance data={cumulative}/>
                </Col>

                <Col xs={12} sm={4} md={4}>
                    <Theaters data={theaters} />
                </Col>
            </Row>
            
            <Row className="my-3 bg-light">
                <Col xs={12} sm={12} md={12}>
                    <Trend data={trend} />
                </Col>
            </Row>
            </>
        )
    }
}

export default Dashboard;