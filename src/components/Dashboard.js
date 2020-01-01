import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RankTable from './RankTable';


class Dashboard extends Component {
    render() {
        return (
            <Row className="mt-3 bg-light">
                <Col xs={12} sm={6} md={4}>
                    <RankTable  />
                </Col>
            </Row>
        )
    }
}

export default Dashboard;