import React, { Component } from 'react';
import './Dashboard.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RankTable from './RankTable';
import PieChart from './PieChart';
import WeeklyLineChart from './WeeklyLineChart';

class Dashboard extends Component {
    
    render() {
        debugger;
        return (
            <>
            <Row className="mt-3 bg-light">
                {Object.keys(this.props.data.tableData).map((key, index) => {
                    return (
                        <Col xs={12} sm={4} md={4} key={index}>
                            <RankTable
                              tableData={this.props.data.tableData[key]}
                              className="dashboard-widget"
                            />
                        </Col>
                    )
                })}

                <Col xs={12} sm={4} md={4}>
                    <PieChart className="dashboard-widget" />
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