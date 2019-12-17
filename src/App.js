import React, { Component } from 'react';
import template from './components/template';
import Selection from './components/Selection';
import Dashboard from './components/Dashboard.jsx';
import dataProcessing, {
    fossilFuelData,
    hydroElectricData,
    renewableEnergyData,
    biomassData
} from './components/dataProcessing'

class App extends Component {
    state = template;

    copyDataSeries = (obj = {}) => {

    };

    render() {
        return (
            <>
                <Selection
                    yearFrom={this.state.yearFrom}
                    yearTo={this.state.yearTo}
                    onChangeYear={this.handleChangeYear}
                    onSubmit={this.handleSubmit}
                />
                <Dashboard
                    userConfig={this.state.userConfig}
                    charts={this.state.charts}
                />
            </>
        );
    }
}

export default App;