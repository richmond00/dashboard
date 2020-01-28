import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Theaters = (props) => {
    const pieChartData = props.data ? props.data : null;

    const options = {
        chart: {
            type: 'pie',
           height: 241
        },

        credits: {
            enabled: false
        },
    
        title: {
            text: undefined
        },

        plotOptions: {
            pie: {
                innerSize: '60%',
                dataLabels: {
                    enabled: true,
                    format: '{key}',
                    // formatter: function() {
                    //     debugger;
                    // },
                    distance: -20,
                }
            }
        },

        legend: {
            enabled: false,
            align: 'right',
            layout: 'horizontal',
            verticalAlign: 'bottom',
        },

        tooltip: {
            pointFormatter: function() {
                return `${this.percentage.toFixed(2)}% <br /> ${this.y}관`
            }
        },

        series: [{
            data: pieChartData,
            showInLegend: true,
        }]
    };
// #EF65A2,
// #64A4F5
// #A377FE
// #FF7E5A
// #65CFC2
    return (
        <div className="bg-white">
            <div className="mt-3 border-bottom">
                <h5>{props && props.title} <small className="ml-3">{props.date}</small></h5>
            </div>
            <div>
            <HighchartsReact 
              highcharts={Highcharts}
              options={options}
            />
            </div>
        </div>
    )
}

export default Theaters;