import React from 'react';
import { Row, Col } from 'react-bootstrap'

const Footer = () => {
    const style = {
        fontSize: "1rem"
    }
    return (
        <Row>
            <Col>
                <div className="text-center">
                    <p style={style}>대시보드: 1년 전 영화순위 <br />
                    Developed by Dongwook Kim (dongwook224@naver.com)</p>
                </div>
            </Col>
        </Row>
    )
}

export default Footer;