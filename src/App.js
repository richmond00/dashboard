import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Title from './components/Title';
import Dashboard from './components/Dashboard';

class App extends Component {
    render() {
        return (
            <Container>
                <Title />
                {/* <Filter /> */}
                <Dashboard />
            </Container>
        )
    }
}

export default App;