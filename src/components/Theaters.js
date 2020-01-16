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
                    format: '{y}관',
                    distance: -20,
                }
            }
        },

        legend: {
            align: 'right',
            layout: 'vertical',
            verticalAlign: 'top',
        },

        tooltip: {
            pointFormatter: function() {
                return `${this.percentage.toFixed(2)}%`
            }
        },

        series: [{
            data: pieChartData,
            showInLegend: true,

        }]
    };

    return (
        <div className="bg-white">
            <div className="mt-3 border-bottom">
                <h5>{props && props.title}</h5>
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