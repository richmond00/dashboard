const getDefaultData = (data, date) => {
    let defaultData = {
        title: { date: date, daily: "관객수", cumulative: "누적관객수", theaters: "상영관수", trend: "" },
        daily: [],
        cumulative: [],
        theaters: [],
        trend: { series: null, categories: null },
        rawdata: data.data.data,
    }

    let movieName = [],
        dateArray = [],
        targetMovies = [];

    let rawdata = data.data.data,
        targetData = rawdata.filter( data => data.date === date );
    
    // 1. daily, cumulative, theaters
    for( let i = 0; i < 5; i++) {
        let daily = { movieCode: `daily${targetData[i].movieCd}`, movieName: targetData[i].movieNm, value: targetData[i].audiCnt },
            cumulative = { movieCode: `cumulative${targetData[i].movieCd}`, movieName: targetData[i].movieNm, value: targetData[i].audiAcc },
            theaters = { name: targetData[i].movieNm, y: targetData[i].scrnCnt },
            tempObject = { name: targetData[i].movieNm, data: [] };
        
        defaultData['daily'].push(daily);
        defaultData['cumulative'].push(cumulative);
        defaultData['theaters'].push(theaters);
        movieName.push(tempObject);
        targetMovies.push(targetData[i].movieNm);
    }

    // 2. Trend
    for(let i = -1; i > -8; i--) {
        let date = getYesterday(i);
        dateArray.push(date);
    }

    
    let myData = [];
    dateArray.forEach(targetDate => {
        myData.push(rawdata.filter( data => data.date === targetDate));
    });

    let myArr = [].concat( ...myData );
    
    let tempArray = [];
    targetMovies.forEach(movie => {
        let filtered = myArr.filter(data => data.movieNm === movie),
            tempObj = { name: movie, data: null },
            tempArr = [];
            
        for(let i = 6; i >= 0; i--) {
            let targetDate = dateArray[i],
                tempElement = filtered.find( data => data.date === targetDate ),
                tempValue = null;

            if( filtered[i] && filtered[i].date === targetDate) {
                tempValue = filtered[i].audiCnt;

            } else if (tempElement) {
                tempValue = tempElement.audiCnt;
            } 
            tempArr.push(tempValue);
        }

        tempObj.data = tempArr;
        tempArray.push(tempObj);
    });
    dateArray.sort();
    
    defaultData['trend']['series'] = tempArray;
    defaultData['trend']['categories'] = dateArray;


    return defaultData;
}

const getNewTrendData = (rawdata, clicked) => {
    let newTrendData = null,
        categories = [],
        series = [],
        data = [],
        filtered = null,
        targetMovieCode = clicked.replace(/daily|cumulative/g, ""),
        dataType = clicked.replace(/[0-9]*/g, ""),
        yesterday = getYesterday(-1),
        lastIndex = 0,
        value = '';

    // clicked 처리
    
    // rawdata에서 clicked영화만 추출
    filtered = rawdata.filter( rawdata => rawdata.movieCd === targetMovieCode );

    // filter를 오늘까지 자름
    lastIndex = filtered.findIndex( filtered => filtered.date === yesterday );
    value = dataType === "daily" ? "audiCnt" : "audiAcc"
    for(let i = 0; i <= lastIndex; i++) {
        categories.push(filtered[i].date);
        data.push(filtered[i][value]);
    }

    // trend data구조에 맞게 처리
    series.push({ name: filtered[0].movieNm, data });
    newTrendData = { categories, series };

    // return trend data
    return newTrendData;
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

export default getDefaultData;
export { getNewTrendData, getYesterday };