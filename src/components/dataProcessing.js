
const defaultDataProcessing = (data, date) => {
    let processedData = {
        dailyAttendence: [],
        cumulativeAttendence: [],
        pieChartData: [],
        lineChartData: []
    }
    let movieName = [],
        dateArray = [];

    let rawdata = data.data.data,
        targetData = rawdata.filter( data => data.date === date );
    
    for( let i = 0; i < 5; i++) {
        let dailyAttendence = { id: i, movieName: targetData[i].movieNm, value: targetData[i].audiCnt },
            cumulativeAttendence = { id: i, movieName: targetData[i].movieNm, value: targetData[i].audiAcc },
            pieChartData = { name: targetData[i].movieNm, y: targetData[i].scrnCnt }
        
        processedData['dailyAttendence'].push(dailyAttendence);
        processedData['cumulativeAttendence'].push(cumulativeAttendence);
        processedData['pieChartData'].push(pieChartData);
        //processedData['lineChartData'];
        movieName.push(targetData[i].movieNm);
    }

    for(let i = -1; i > -8; i--) {
        let date = getYesterday(i);
        dateArray.push(date);
    }
    debugger;

    return processedData;
}

const getYesterday = (i) => {
    let date = new Date();
    date.setDate(date.getDate() + i);

    let month = '' + (date.getMonth() + 1),
        day = '' + date.getDate(),
        year = date.getFullYear() - 1;
    
    if (month.length < 2) {
        month = '0' + month;
    }

    if (day.length < 2) {
        day = '0' + day;
    }

    return [year, month, day].join('');
}

export default defaultDataProcessing;
export { getYesterday };