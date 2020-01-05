import React from 'react';
import Table from 'react-bootstrap/Table';

const RankTable = (props) => {
    

    return (
        
        <div className="bg-white">
            <div className="mt-3 border-bottom">
                <h5>타이틀</h5>
            </div>
            <div>
                <Table bordered size="" className="bg-white mt-2">
                    <tbody>
                        {props.tableData.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td>{data.movieName}</td>
                                    <td>{data.value}</td>
                                </tr>
                            )
                        })}
                        <tr>
                            <td colSpan="2">More...</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            
        </div>
    )

}



export default RankTable;