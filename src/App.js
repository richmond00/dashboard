import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import TopNav from './components/TopNav';
import Dashboard from './components/Dashboard';
import getDefaultData, { getDate, getTrendData } from './common/dataProcessing';
import axios from 'axios';

class App extends Component {
    constructor() {
        super();
        this.state = {
            searchValue: '',
            searchDate: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
            currentDate: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
            dropdownTitle: '영화명',
            isLoading: true,
            isSearch: false,
            title: null,
            daily: null,
            cumulative: null,
            theaters: null,
            trend: null,
            rawdata : null,
            error: "",
        };

        this.handleMovienameClick = this.handleMovienameClick.bind(this);
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
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        //debugger;
        //getSearchResultData(this.state.searchValue);
        // 1. 영화명인 경우
       
        let defaultData = getDefaultData(this.state.rawdata, getDate(this.state.searchDate));
        const { title, daily, cumulative, theaters, trend } = defaultData;
        // 2. 날짜인 경우
        this.setState({
            ...this.state, ...{
                isSearch: true,
                currentDate: this.state.searchDate,
                title,
                daily,
                cumulative,
                theaters,
                trend
            }
        });
    }

    handleMovienameClick(event) {
        // 1. 데이터 재처리
        debugger;
        let clicked = event.target.getAttribute('data-title'),
            date = this.state.isSearch ? getDate(this.state.searchDate) : getDate(this.state.currentDate),
            trend = getTrendData(this.state.rawdata, clicked, date),
            title = { ...this.state.title, trend: trend.title };
 
        //2. 재처리된 데이터 setState로 변경
        this.setState({
            ...this.state, ...{
                isLoading: false,
                trend,
                title
            }
        });
    }

    componentDidMount() {
        axios.get('../2019.json')
             .then( response => {
                let today = getDate(new Date()),
                    defaultData = getDefaultData(response.data.data, today);

                const title = defaultData.title,
                      daily = defaultData.daily,
                      cumulative = defaultData.cumulative,
                      theaters  = defaultData.theaters,
                      trend = defaultData.trend,
                      rawdata = defaultData.rawdata;
            
                this.setState({
                    ...this.state, ...{
                        isLoading: false,
                        title,
                        daily,
                        cumulative,
                        theaters,
                        trend,
                        rawdata
                    }
                });
          })
          .catch( error => console.log('error: ', error));
    }

    render() {
        //const { isLoading, title, daily, cumulative, theaters, trend } = this.state;
        const dashboardData = { ...this.state };
        const dashboard = <Dashboard data={dashboardData} change={this.handleMovienameClick} />,
              loadingMessage =  <p className="mt-3">데이터 로드 중입니다...</p>;

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
                    { dashboardData.isLoading ? loadingMessage : dashboard }
                    
                </Container>
            </>
        )
    }
}

export default App;