import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
    title: {
        text: undefined
    },
    series: [{
        data: [1,2,3]
    }]
}

const LeftLine = () => <div>
    <HighchartsReact highcharts={Highcharts} options={options} />
</div>

export default LeftLine