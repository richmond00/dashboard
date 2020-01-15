import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Theaters = (props) => {
    const pieChartData = props.data ? props.data : null;
    console.log(pieChartData);

    const options = {
        chart: {
            type: 'pie',
           height: 308.8  
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
                    enabled: false
                }
            }
        },

        legend: {
            //enabled: true,
            align: 'right',
            layout: 'vertical',
            verticalAlign: 'top'

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