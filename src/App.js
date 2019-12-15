import React, { Component } from 'react'
import template from './components/template'
import Dashboard from './components/Dashboard.jsx'

class App extends Component {
    state = template;

    render() {
        return (
            <Dashboard
            userConfig={this.state.userConfig}
            charts={this.state.charts}
            />
        )
    }
}

export default App