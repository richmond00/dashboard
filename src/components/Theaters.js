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
                colors: ['#4dabf7', '#74c0fc', '#a5d8ff', '#d0ebff', '#e7f5ff'],
                dataLabels: {
                    enabled: true,
                    formatter: function() {
                        if( this.key.length > 8) {
                            return this.key.substring(0, 8) + '...';
                        }
                        return this.key
                    },
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
                return `${this.percentage.toFixed(2)}% (${this.y.toLocaleString()}관)`
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