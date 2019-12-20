import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'

class Title extends Component {
    render() {
        return (
            <>
            <Container className="bg-light">
                <h1 className="text-center mt-5">
                    Net Energy Generation in the United States
                </h1>
                <p className="text-center">
                    Source: <a href="https://www.eia.gov">U.S. Energy Information</a>{" "}
                </p>
            </Container>
            </>
        )
    }

}

export default Title;