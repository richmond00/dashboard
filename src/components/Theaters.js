import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Theaters = (props) => {
    const pieChartData = props.data ? props.data : null;

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
            data: pieChartData

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