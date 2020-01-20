import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import TopNav from './components/TopNav';
import Dashboard from './components/Dashboard';
import getDefaultData from './common/dataProcessing';
import axios from 'axios';

class App extends Component {
    constructor() {
        super();
        this.state = {
            rawdata: null,
            searchValue: '',
            searchDate: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
            dropdownTitle: '영화명',
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
        });
    }

    handleSearchChange(event) {
        this.setState({
           ...this.state, ...{ 
               searchValue: event.target.value
           }
        });
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
        //debugger;
        //getSearchResultData(this.state.searchValue);
        // 1. 영화명인 경우
        let defaultData = getDefaultData(this.state.rawdata, this.state.searchDate);
        debugger;

        // 2. 날짜인 경우
    }

    componentDidMount() {
        axios.get('../2019.json')
          .then( response => {
              this.setState({
                  ...this.state, ...{
                      rawdata: response
                  }
              })
          })
          .catch( error => console.log('error: ', error));
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