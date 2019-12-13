import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import LeftBar from './components/LeftBar/LeftBar'


class App extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={4}>
                        <LeftBar></LeftBar>
                    </Col>
                    <Col md={4}>Bar2</Col>
                    <Col md={4}>Bar3</Col>
                </Row>
                <Row>
                    <Col md={4}>Line1</Col>
                    <Col md={4}>Line2</Col>
                    <Col md={4}>Line3</Col>
                </Row>
                <Row>
                    <Col md={8}>Graph1</Col>
                    <Col md={4}>Table1</Col>
                </Row>




            </Container>
        )
    }
}

export default App