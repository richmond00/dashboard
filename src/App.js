import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Title from './components/Title';
import Dashboard from './components/Dashboard';
import axios from 'axios';
import defaultDataProcessing from './components/dataProcessing';

class App extends Component {
    state = {//관객수, 누적관객수, 스크린수
        dailyAudit: [
            { id: 1, movieNm: "제목1", value: 23000 },
            { id: 2, movieNm: "제목2", value: 13000 },
            { id: 3, movieNm: "제목3", value: 9000 },
            { id: 4, movieNm: "제목4", value: 7800 },
            { id: 5, movieNm: "제목5", value: 300 },
        ],

        accAudit: [
            { id: 1, movieNm: "제목6", value: 223000 },
            { id: 2, movieNm: "제목7", value: 313000 },
            { id: 3, movieNm: "제목8", value: 89000 },
            { id: 4, movieNm: "제목9", value: 72800 },
            { id: 5, movieNm: "제목10", value: 30000 },
        ],
    }
    copyData = (obj = {}) => {
        debugger;
        this.setState({
            tableData: obj.tableData
        })
    }
    

    componentDidMount() {
        let date = '20190104';
        axios.get('../2019.json')
          .then( res => {
            let processedData = defaultDataProcessing(res, date);
            this.copyData(processedData);
          }).chatch( err => console.log(err) );
    }

    render() {
        debugger;
        return (
            <Container>
                <Title />
                <Dashboard 
                  data={this.state}
                />
            </Container>
        )
    }
}

export default App;