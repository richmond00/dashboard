import React from 'react';
import Table from 'react-bootstrap/Table';

const DashboardByTitle = (props) => {
    const dashboard = (
        <div className="bg-white">
            <div className="mt-3 border-bottom">
                <h5>{props.data && props.data[0].movieNm}</h5>
            </div>
            <div>
                <Table className="bg-white mt-2">
                    <thead>
                        <tr>
                            <th>날짜</th>
                            <th>순위</th>
                            <th>매출</th>
                            <th>누적매출</th>
                            <th>관객</th>
                            <th>누적관객</th>
                            <th>상영관수</th>
                            <th>상영횟수</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.data && props.data.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td>{data.date}</td>
                                    <td>{data.rank}</td>
                                    <td>{data.salesAmt}</td>
                                    <td>{data.salesAcc}</td>
                                    <td>{data.audiCnt}</td>
                                    <td>{data.audiAcc}</td>
                                    <td>{data.scrnCnt}</td>
                                    <td>{data.showcnt}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        </div>
    );

    const errorMessage = <p>데이터가 없습니다</p>

    return (
        <>
        { props.data ? dashboard : errorMessage }
        </>
    );
}

export default DashboardByTitle;