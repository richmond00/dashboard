import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Title from './components/Title';
import Dashboard from './components/Dashboard';
import axios from 'axios';
import defaultDataProcessing from './components/dataProcessing';

class App extends Component {
    constructor() {
        super();
        this.state = { 
            isLoading: true,
            error: "",
            dailyAttendence: null,
            cumulativeAttendence: null,
            pieChartData: null,
            lineChartData: null
        };
    }

    loadData = () => {
        this.setState({ loading: true });
        return axios.get('../2019.json')
                    .then( response => {
                        let date = '20190104',
                            processedData = null;
                        console.log(response);
                        processedData  = defaultDataProcessing(response, date);
                        debugger;
                        this.setState({
                            ...this.state, ...{
                                dailyAttendence: processedData.dailyAttendence,
                                cumulativeAttendence: processedData.cumulativeAttendence,
                                loading: false,
                                error: false
                            }   
                        });
                    })
                    .catch( error => {
                        console.log('error: ', error);
                        this.setState({
                            error: `${error}`,
                            loading: false
                        });
                    });
    }
    
    async componentDidMount() {
        //this.loadData();
        let defaultData = await axios.get('../2019.json')
                                    .then( response => {
                                        let date = '20190104';
                                        return defaultDataProcessing(response, date);
                                    })
                                    .catch( error => {
                                        console.log('error: ', error);
                                    })
        
        const dailyAttendence = defaultData.dailyAttendence,
              cumulativeAttendence = defaultData.cumulativeAttendence,
              pieChartData  = defaultData.pieChartData,
              lineChartData = defaultData.lineChartData;
        
        this.setState({
            ...this.state, ...{
                isLoading: false,
                dailyAttendence,
                cumulativeAttendence,
                pieChartData,
                lineChartData
            }
        })
                                    
    }

    render() {
        const { isLoading, dailyAttendence, cumulativeAttendence } = this.state;

        return (
            <Container>
                <Title />
                <Dashboard />
            </Container>
        )
    }
}

export default App;