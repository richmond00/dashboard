import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RankTable from './RankTable';


class Dashboard extends Component {
    render() {
        console.log(this.props.data);
        return (
            <Row className="mt-3 bg-light">
                {Object.keys(this.props.data).map((key, index) => {
                    return (
                        <Col xs={12} sm={4} md={4} key={index}>
                            <RankTable
                              tableData={this.props.data[key]}
                            />
                        </Col>
                    )
                })}
            </Row>
        )
    }
}

export default Dashboard;