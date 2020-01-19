import axios from 'axios';
import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Attendance from './Attendance';
import Theaters from './Theaters';
import Trend from './Trend';
import getDefaultData, { getTrendData, getDate } from '../common/dataProcessing';

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
                                         let today =  getDate(0);
                                         return getDefaultData(response, today);
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
            trend = getTrendData(this.state.rawdata, clicked),
            title = { ...this.state.title, trend: trend.title };
 
        //2. 재처리된 데이터 setState로 변경
        this.setState({
            ...this.state, ...{
                isLoading: false,
                trend,
                title
            }
        });     

    }
    
    render() {
        const { isLoading, title, daily, cumulative, theaters, trend } = this.state;
             
        const dashboard = (
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
                    <Trend
                      title={title && title.trend}
                      data={trend}
                    />
                </Col>
            </Row>
            </>
        );

        const loadingMessage =  <p className="mt-3">데이터 로드 중입니다...</p>;

        return (
            <>
                { isLoading ? loadingMessage : dashboard }
            </>
        );
    }
}

export default Dashboard;