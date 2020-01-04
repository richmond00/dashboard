import React from 'react';
import Table from 'react-bootstrap/Table';

const RankTable = (props) => {
    console.log(props.tableData);
    return (
        <div className="bg-white">
            <div className="mt-3">
                <h5>타이틀</h5>
            </div>
            <div>
                <Table className="bg-white mt-2">
                    <tbody>
                        {props.tableData.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td>{data.movieNm}</td>
                                    <td>{data.value}</td>
                                </tr>
                            )

                        })}
                    </tbody>
                </Table>
            </div>
        </div>
    )

}



export default RankTable;