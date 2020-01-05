
const defaultDataProcessing = (data, date) => {
    let processedData = {

        tableData: {
            dailyAttendence: [],
            cumulativeAttendence: []
        },
        pieChartData: [],
        lineChartData: []
    }

    let rawdata = data.data.data,
        targetData = rawdata.filter( data => data.date === date );

    targetData.forEach( (data, index) => {
        let dailyAttendence = { id: index, movieName: data.movieNm, value: data.audiCnt },
            cumulativeAttendence = { id: index, movieName: data.movieNm, value: data.audiAcc };

        processedData.tableData['dailyAttendence'].push(dailyAttendence);
        processedData.tableData['cumulativeAttendence'].push(cumulativeAttendence);
        

    })
    return processedData;
}


export default defaultDataProcessing;