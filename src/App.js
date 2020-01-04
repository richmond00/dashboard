import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Title from './components/Title';
import Dashboard from './components/Dashboard';

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

    render() {
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