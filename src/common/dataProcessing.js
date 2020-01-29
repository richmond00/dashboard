const getTitleData = (rawdata, date, movieName) => {
    let titleData = [],
        filtered = rawdata.filter( data => data.movieNm === movieName );
    if ( filtered.length === 0 ) {
        return null;
    }
    
    filtered.forEach( data => {
        const { rank, movieNm, movieCd, openDt, salesAmt, salesAcc, audiCnt, audiAcc, scrnCnt, showcnt, date } = data;
        const tempObj = { rank, movieNm, movieCd, openDt, salesAmt, salesAcc, audiCnt, audiAcc, scrnCnt, showcnt, date };
        titleData.push(tempObj);
    });

    return titleData;
}

const getDefaultData = (data, date, isAttendance = true) => {
    const title4Attendance = { date, daily: "관객수", cumulative: "누적관객수", theaters: "상영관수", trend: "" },
          title4Income = { date, daily: "수입", cumulative: "누적수입", theaters: "상영관수", trend: ""};

    let defaultData = {
        title: isAttendance ? title4Attendance : title4Income,
        daily: [],
        cumulative: [],
        theaters: [],
        trend: null,
        rawdata: data,
    }

    let movieName = [],
        targetMovies = [],
        rawdata = data,
        targetData = rawdata.filter( data => data.date === date ),
        dataKey = isAttendance ? 'audiCnt' : 'salesAmt',
        unit = isAttendance ? '명' : '원';

    // 1. daily,
    for( let i = 0; i < 5; i++ ) {
        let daily = { movieCode: `daily${targetData[i].movieCd}`, movieName: targetData[i].movieNm, value: targetData[i][dataKey].toLocaleString() + unit },
            tempObject = { name: targetData[i].movieNm, data: [] };
        
        defaultData['daily'].push(daily);

        movieName.push(tempObject);
        targetMovies.push(targetData[i].movieNm);
    }
    dataKey = isAttendance ? 'audiAcc' : 'salesAcc';
    // 2. cumulative
    targetData.sort((a, b) => b[dataKey] - a[dataKey]);
    for ( let i = 0; i < 5; i++ ) {
        let cumulative = { movieCode: `cumulative${targetData[i].movieCd}`, movieName: targetData[i].movieNm, value: targetData[i][dataKey].toLocaleString() + unit };
        defaultData['cumulative'].push(cumulative);
    }

    // 3. theaters
    targetData.sort((a, b) => b.scrnCnt - a.scrnCnt);
    for( let i = 0; i < 5; i++ ) {
        let theaters = { name: targetData[i].movieNm, y: targetData[i].scrnCnt };
        defaultData['theaters'].push(theaters);
    }

    // 4. Trend
    defaultData.trend = getTrendData(rawdata, defaultData.daily[0].movieCode, date, isAttendance);
    defaultData.title.trend = defaultData.trend.title;
   
    return defaultData;
}

const getTrendData = (rawdata, clicked, date, isAttendance) => {
    let trendData = null,
        categories = [],
        series = [],
        data = [],
        filtered = null,
        targetMovieCode = clicked.replace(/daily|cumulative/g, ""),
        dataType = clicked.replace(/[0-9]*/g, ""),
        lastIndex = 0,
        value = '',
        title = '',
        releaseDate = '',
        tooltipUnit = '명';
 
    // rawdata에서 clicked영화만 추출
    filtered = rawdata.filter( rawdata => rawdata.movieCd === targetMovieCode );

    // filter를 오늘까지 자름
    lastIndex = filtered.findIndex( filtered => filtered.date === date );
    if ( isAttendance ) {
        value = dataType === "daily" ? "audiCnt" : "audiAcc";
        title = dataType === "daily" ? `${filtered[0].movieNm} 일별 관객수` : `${filtered[0].movieNm} 일별 누적관객수`;
    } else {
        value = dataType === "daily" ? "salesAmt" : "salesAcc";
        title = dataType === "daily" ? `${filtered[0].movieNm} 일별 수입` : `${filtered[0].movieNm} 일별 누적수입`;
        tooltipUnit = '원';
    }

    //releaseDate = filtered[0].openDt.replace(/-/g, '');

    for(let i = 0; i <= lastIndex; i++) {
        let formattedDate = getTrendDate(filtered[i].date),
            //seriesData = ( filtered[i].date !== releaseDate ) ? {y: filtered[i][value] } :  { y: filtered[i][value], id: 'annotation' };
            seriesData = filtered[i][value];

        categories.push(formattedDate); // x축 날짜 데이터 삽입
        data.push(seriesData);
    }

    // trend data구조에 맞게 처리
    series.push({ name: filtered[0].movieNm, data, tooltipUnit });
    trendData = { categories, series, title };


    // return trend data
    return trendData;
}

const getTrendDate = (date) => {
    // 1. date포맷 변경: "20190101" -> "2019-01-01" 
    let year = date.substr(0, 4),
        month = date.substr(4, 2),
        day = date.substr(6, 5),
        formattedDate = `${year}-${month}-${day}`;
    
    // 2. Date 객체 생성
    let dateObject = new Date(formattedDate);

    // 3. getDay로 요일 생성
    let weekday = dateObject.getDay();
    let weekdayArray = ["일", "월", "화", "수", "목", "금", "토"];

    // 4. 요일 + 달.일 형식으로 변경
    let result = `${month}.${day} <br /> ${weekdayArray[weekday]}`;

    return result;
}

const getDate = (date) => {
    //let date = new Date();
    //date.setDate(date.getDate() + i);
    let isNow = (date.getFullYear() === 2020),
        month = '' + (date.getMonth() + 1),
        day = '' + date.getDate(),
        year = isNow ? date.getFullYear() - 1 : date.getFullYear();
    
    if (month.length < 2) {
        month = '0' + month;
    }

    if (day.length < 2) {
        day = '0' + day;
    }

    return [year, month, day].join('');
}


const getSearchResultData = (movieName) => {
    console.log('dataprocessing', movieName);
}

export default getDefaultData;
export { getTrendData, getDate, getSearchResultData, getTitleData };