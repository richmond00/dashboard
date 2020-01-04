import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Title from './components/Title';
import Dashboard from './components/Dashboard';

class App extends Component {
    state = {//관객수, 누적관객수, 스크린수
        dailyAudit: [
            { id: 1, movieNm: "영화1", value: 23000 },
            { id: 2, movieNm: "영화2", value: 13000 },
            { id: 3, movieNm: "영화3", value: 9000 },
            { id: 4, movieNm: "영화4", value: 7800 },
            { id: 5, movieNm: "영화5", value: 300 },
        ],

        accAudit: [
            { id: 1, movieNm: "영화6", value: 223000 },
            { id: 2, movieNm: "영화7", value: 313000 },
            { id: 3, movieNm: "영화8", value: 89000 },
            { id: 4, movieNm: "영화9", value: 72800 },
            { id: 5, movieNm: "영화10", value: 30000 },
        ],

        screenCount: [
            { id: 1, movieNm: "영화11", value: 320 },
            { id: 2, movieNm: "영화12", value: 222 },
            { id: 3, movieNm: "영화13", value: 220 },
            { id: 4, movieNm: "영화14", value: 100 },
            { id: 5, movieNm: "영화15", value: 30 },
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