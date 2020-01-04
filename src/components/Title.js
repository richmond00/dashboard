import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Title extends Component {
    constructor() {
        super();

        let today = new Date(),
            date = `${today.getFullYear() - 1}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
        
        this.state = {
            date: date
        };
    }
    
    render() {
        return (
            <Row className="mt-3">
                <Col className="bg-light">
                    <h1 className="text-center">
                        대시보드 타이틀 {" "} <small>{this.state.date}</small>  
                    </h1>
                    <p className="text-center">
                        Source: <a href="https://kofic.or.kr/kofic/">영화진흥위원회</a>
                    </p>
                </Col>
            </Row>
        )
    }
}

export default Title;