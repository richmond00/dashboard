
const defaultDataProcessing = (data, date) => {
    let processedData = {
        dailyAttendence: [],
        cumulativeAttendence: [],
        pieChartData: [],
        lineChartData: []
    }

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
    }

    // targetData.forEach( (data, index) => {
    //     let dailyAttendence = { id: index, movieName: data.movieNm, value: data.audiCnt },
    //         cumulativeAttendence = { id: index, movieName: data.movieNm, value: data.audiAcc };

    //     processedData['dailyAttendence'].push(dailyAttendence);
    //     processedData['cumulativeAttendence'].push(cumulativeAttendence);
    // });
    
    return processedData;
}


export default defaultDataProcessing;