import React, { Component } from 'react';
import './App.css';
import template from './components/template';
import Title from './components/Title';
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
        this.setState({
            ...obj,

            charts: [
                { serie: fossilFuelData, title: "Fossil Fuel" },
                { serie: hydroElectricData, title: "Hydroelectric Energy" },
                { serie: renewableEnergyData, title: "Biomass" },
                { serie: biomassData, title: "Renewable Energy" }
            ]
        });
    };

    componentDidMount() {
        dataProcessing(this.state.yearFrom, this.state.yearTo, this.state.msg);
        this.copyDataSeries();
    }

    handleSubmit = e => {
        let msg = dataProcessing(this.state.yearFrom, this.state.yearTo, this.state.msg);
        this.copyDataSeries({msg});
        e.preventDefault();
    }

    componentDidUpdate(prepProps, prevState) {
        if (prevState.yearFrom !== this.state.yearFrom) {
            this.handleChangeSelect();
        }

        if(prevState.yearTo !== this.state.yearTo) {
            this.handleChangeSelect();
        }
    }

    handleChangeSelect() {
        let msg = dataProcessing(this.state.yearFrom, this.state.yearTo);
        this.copyDataSeries({msg: msg});
    }

    handleChangeYear = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <>
            <Title />
            <div className="container mb-5 pb-3 bg-light">
                <div 
                  className={
                    "text-center mb-0 pt-3 bold " + 
                    (this.state.msg !== "Select the range" ? "text-danger" : "")
                  }
                >
                <strong>{this.state.msg}</strong>
                </div>
                <Selection
                    yearFrom={this.state.yearFrom}
                    yearTo={this.state.yearTo}
                    onChangeYear={this.handleChangeYear}
                    onSubmit={this.handleSubmit}
                />
                <Dashboard
                    userConfig={this.state.userConfig}
                    charts={this.state.charts}
                    key={this.state.index}
                />
                
            </div>
            </>
        );
    }
}

export default App;