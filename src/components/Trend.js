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
            text: undefined
        },
        
        credits: {
            enabled: false
        },

        xAxis: {
            categories: categories
        },

        legend: {
            align: 'right',
            layout: 'vertical',
            verticalAlign: 'top'

        },

        series: series
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

export default Trend; 