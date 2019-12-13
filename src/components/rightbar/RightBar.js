import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
    chart: {
        type: 'bar'
    },

    title: {
        text: undefined
    },

    xAxis: {
        categories: [ 'series1', 'series2', 'series3', 'series4' ]
    },

    series: [{
        data: [1,2,3,4]
    }]
}

const RightBar = () => <div>
    <HighchartsReact highcharts={Highcharts} options={options} />
</div>

export default RightBar