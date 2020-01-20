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
            searchValue: '',
            searchDate: new Date(),
            dropdownTitle: '영화명'
        };
        this.handleDropdownSelect = this.handleDropdownSelect.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleDatePickerChange = this.handleDatePickerChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleDropdownSelect(event) {
        const dropdownTitle = (event === "movieName") ? "영화명" : "날짜";

        this.setState({
            ...this.state, ...{
                dropdownTitle
            }
        })
        
    }

    handleSearchChange(event) {
        this.setState({
            searchValue: event.target.value
        })
    }

    handleDatePickerChange(date) {
        this.setState({
            ...this.state, ...{
                searchDate: date
            }
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
                      dropdownTitle={this.state.dropdownTitle}
                      dropdownSelect={this.handleDropdownSelect}
                      searchDate={this.state.searchDate}
                      searchChange={this.handleSearchChange}
                      datePickerChange={this.handleDatePickerChange}
                      submit={this.handleSubmit}
                    />
                    <Dashboard />
                </Container>
            </>
        )
    }
}

export default App;