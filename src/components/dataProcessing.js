
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
    //dateArray
    
    // series { name: 'movei1', data: [111, 222, 111, 111, 111, 111, 111] }

    // let lineData = [
    //         { name: 'movie1', data: [111,222,333,444,555,666,777] },
    //         { name: 'movie2', data: [111,222,333,444,555,666,777]},
    //         { name: 'movie3', data: [111,222,333,444,555,666,777]},
    //         { name: 'movie4', data: [111,222,333,444,555,666,777]},
    //         { name: 'movie5', data: [111,222,333,444,555,666,777]}
    // ]  

    // 전체 데이터에서 날짜를 뽑는다
    let myData = [];
    dateArray.forEach(targetDate => {
        let tempDate = rawdata.filter( data => data.date === targetDate );
        myData.push(tempDate);
    });
    debugger;

    // 각 날짜에서 해당 영화를 뽑는다

    // 있으면 데이터 집어넣고 없으면 null로 집어넣는다



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