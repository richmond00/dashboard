import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Trend = (props) => {
    const series = props.data ? props.data.series : null,
          categories = props.data ? props.data.categories : null;

    const options = {
        chart: {
            type: 'spline'
        },

        title: {
            texxt: 'My Chart'
        },

        xAxis: {
            categories: categories
        },

        series: series
    };

    return (
        <HighchartsReact 
          highcharts={Highcharts}
          options={options}
        />
    )
}

export default Trend; 