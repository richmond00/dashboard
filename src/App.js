import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import TopNav from './components/TopNav';
import Dashboard from './components/Dashboard';

class App extends Component {
    render() {
        return (
            <Container>
                <TopNav />
                <Dashboard />
            </Container>
        )
    }
}

export default App;