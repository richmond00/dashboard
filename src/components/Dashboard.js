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
            title: null,
            daily: null,
            cumulative: null,
            theaters: null,
            trend: null,
            error: "",
        };
        this.handleMovienameClick = this.handleMovienameClick.bind(this);
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
        
        const title = defaultData.title,
              daily = defaultData.daily,
              cumulative = defaultData.cumulative,
              theaters  = defaultData.theaters,
              trend = defaultData.trend;
        
        this.setState({
            ...this.state, ...{
                isLoading: false,
                title,
                daily,
                cumulative,
                theaters,
                trend
            }
        })                 
    }

    handleMovienameClick(event) {
        console.log('movie clicked', event.target.getAttribute('data-title'));
    }
    
    render() {
        const { isLoading, title, daily, cumulative, theaters, trend } = this.state;

        return (
            <>
            <Row className="mt-3 bg-light">
                <Col xs={12} sm={4} md={4}>
                    <Attendance
                      title={title && title.daily}
                      data={daily}
                      click={this.handleMovienameClick}
                    />
                </Col>

                <Col xs={12} sm={4} md={4}>
                    <Attendance
                      title={title && title.cumulative}
                      data={cumulative}
                      click={this.handleMovienameClick}
                    />
                </Col>

                <Col xs={12} sm={4} md={4}>
                    <Theaters
                      title={title && title.theaters}
                      data={theaters}
                    />
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