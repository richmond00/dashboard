//import axios from 'axios';
import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Rank from './Rank';
import Theaters from './Theaters';
import Trend from './Trend';

class DashboardByDate extends Component {
    
    render() {
        const { title, daily, cumulative, theaters, trend } = this.props.data;
        const dashboard = (
            <>
            <Row className="mt-3 bg-light">
                <Col xs={12} sm={3} md={4}>
                    <Rank
                      title={title && title.daily}
                      data={daily}
                      click={this.props.change}
                    />
                </Col>

                <Col xs={12} sm={3} md={4}>
                    <Rank
                      title={title && title.cumulative}
                      data={cumulative}
                      click={this.props.change}
                    />
                </Col>

                <Col xs={12} sm={6} md={4}>
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

        //const loadingMessage =  <p className="mt-3">데이터 로드 중입니다...</p>;

        return (
            <>
            { dashboard }
            </>
        );
    }
}

export default DashboardByDate;