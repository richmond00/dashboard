import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const WeeklyLineChart = () => {
    const options = {
        chart: {
            type: 'spline'
        },

        title: {
            texxt: 'My Chart'
        },

        xAxis: {
            categories: ['1/2', '1/3', '1/4', '1/5', '1/6', '1/7']
        },

        series: [
            {
                data: [1, 2, 1, 4, 3, 6]
            },
            {
                data: [3, 4, 9, 9, 1, 2]
            }   
        ]
    };

    return (
        <HighchartsReact 
          highcharts={Highcharts}
          options={options}
        />
    )
}

export default WeeklyLineChart; 