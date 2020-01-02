import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Title from './components/Title';
import Dashboard from './components/Dashboard';

class App extends Component {
    state = {
        information: [
            {
                id: 1,
                col1: "백두산",
                col2: "210,000"
            },
            {
                id: 2,
                col1: "겨울왕국2",
                col2: "103,000"
            },
        ]
    }

    render() {
        return (
            <Container>
                <Title />
                <Dashboard 
                  data={this.state.information}
                />
            </Container>
        )
    }
}

export default App;