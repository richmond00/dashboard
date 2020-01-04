import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const PieChart = () => {
    const options = {
        chart: {
            type: 'pie',
           height: 308.8
            
        },
    
        title: {
            text: undefined
        },

        plotOptions: {
            pie: {
                innerSize: '60%',
                dataLabels: {
                    enabled: false
                }
            }
        },

        series: [{
            data: [{
                name: 'Chrome',
                y: 61.41,
            }, {
                name: 'Internet Explorer',
                y: 11.84
            }, {
                name: 'Firefox',
                y: 10.85
            }, {
                name: 'Edge',
                y: 4.67
            }, {
                name: 'Safari',
                y: 4.18
            }]

        }]
    };

    return (
        <div className="bg-white">
            <div className="mt-3 border-bottom">
                <h5>타이틀</h5>
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

export default PieChart;