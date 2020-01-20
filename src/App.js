import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import TopNav from './components/TopNav';
import Dashboard from './components/Dashboard';
import { getSearchResultData } from './common/dataProcessing';

class App extends Component {
    constructor() {
        super();
        this.state = {
            searchValue: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            searchValue: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        getSearchResultData(this.state.searchValue);
    }

    render() {
        return (
            <>  
                <Container>
                    <TopNav
                      change={this.handleChange}
                      submit={this.handleSubmit}
                    />
                    <Dashboard />
                </Container>
            </>
        )
    }
}

export default App;