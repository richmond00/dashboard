import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
require('highcharts/modules/annotations')(Highcharts);

const Trend = (props) => {
    const series = props.data ? props.data.series : null,
          categories = props.data ? props.data.categories : null;
    
    Highcharts.setOptions({
        lang: {
            thousandsSep: ','
        }
    });
          
    const options = {
        chart: {
            type: 'area',
            height: 241,
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

        yAxis: {
            title: undefined,
            min: 0,
            // labels: {
            //     formatter: function() {
            //         let value = this.value;

            //         if( value >= 0 && value <= 10000) {
                        

            //         } else if (value >= 100000 && value <= 1000000) {

            //         }


            //         return value;
            //     }
            // }
        },

        plotOptions: {
            series: {
                color: '#5591f4',
                marker: {
                    fillColor: '#FFFFFF',
                    lineWidth: 2,
                    lineColor: null
                },
                fillOpacity: 0.1
            }

        },

        legend: {
            enabled: false
        },

        series: series,

        // annotations: [{
        //     labels: [{ 
        //         point: 'annotation',
        //         text: '개봉일'
        //     }]
        // }],
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

export default Trend; 