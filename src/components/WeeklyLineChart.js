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