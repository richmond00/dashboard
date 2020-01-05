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
            loading: true,
            error: "",
            data: null 
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
                        this.setState({
                            data: processedData,
                            loading: false,
                            error: false
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
    
    componentDidMount() {
        this.loadData();
    }

    render() {
        const { loading, error, data } = this.state;

        return (
            <Container>
                <Title />
                <Dashboard 
                  data = {data}
                />
            </Container>
        )
    }
}

export default App;