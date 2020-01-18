import axios from 'axios';
import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Attendance from './Attendance';
import Theaters from './Theaters';
import Trend from './Trend';

import getDefaultData, { getNewTrendData, getYesterday } from '../common/dataProcessing';

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
            rawdata : null,
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
              trend = defaultData.trend,
              rawdata = defaultData.rawdata;
        
        this.setState({
            ...this.state, ...{
                isLoading: false,
                title,
                daily,
                cumulative,
                theaters,
                trend,
                rawdata
            }
        })                 
    }

    handleMovienameClick(event) {
        // 1. 데이터 재처리
        let clicked = event.target.getAttribute('data-title'),
            trend = getNewTrendData(this.state.rawdata, clicked);


        //2. 재처리된 데이터 setState로 변경
        this.setState({
            ...this.state, ...{
                isLoading: false,
                trend
            }
        });     

    }
    
    render() {
        const { isLoading, title, daily, cumulative, theaters, trend } = this.state;

        return (
            <>
            <Row className="mt-3 bg-light">
                <Col xs={12} sm={3} md={3}>
                    <Attendance
                      title={title && title.daily}
                      data={daily}
                      click={this.handleMovienameClick}
                    />
                </Col>

                <Col xs={12} sm={3} md={3}>
                    <Attendance
                      title={title && title.cumulative}
                      data={cumulative}
                      click={this.handleMovienameClick}
                    />
                </Col>

                <Col xs={12} sm={6} md={6}>
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