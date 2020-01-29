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
            categories: categories,
            tickPositioner: function() {
                
                const categoryLength = this.categories.length;
                let positions = [];
               
                if( categoryLength <= 8 ) {
                    return;
                } else if ( categoryLength > 8 && categoryLength % 2 !== 0 ){
                    for(let i = 0; i < categoryLength; i += 2) {
                        positions.push(i);
                    }
                    return positions;
                } else if ( categoryLength > 8 && categoryLength % 2 === 0 ){
                    for(let i = 0; i < categoryLength; i += 3) {
                        positions.push(i);
                    }
                    positions.push(categoryLength - 1);
                    return positions;
                }
            
                
            }
        },

        yAxis: {
            title: undefined,
            min: 0,
            labels: {
                formatter: function() {
                    let value = this.value,
                        unit = '';

                    if( value >= 10000 && value < 100000000) { //관객수: 만부터 1억까지
                        value = value / 10000;
                        unit = '만';
                    } else if ( value >= 100000000 && value < 1000000000000) { // 매출액: 1억부터 1조까지
                        value = value / 100000000;
                        unit = '억'
                    }

                    return value.toLocaleString() + unit;
                }
            }
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

        tooltip: {
            pointFormatter: function() {
                return this.y.toLocaleString() + this.series.userOptions.tooltipUnit;
            }
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

export default Trend; 