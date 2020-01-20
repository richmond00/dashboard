import React from 'react';
import Table from 'react-bootstrap/Table';

const Attendance = (props) => {
    return (
        <div className="bg-white">
            <div className="mt-3 border-bottom">
                <h5>{props && props.title}</h5>
            </div>
            <div>
                <Table className="bg-white mt-2">
                    <tbody>
                        {props.data && props.data.map((data) => {
                            return (
                                <tr key={data.movieCode}>
                                    <td
                                      className="movie-title text-left"
                                      data-title={data.movieCode}
                                      onClick={props.click}
                                    >{data.movieName}</td>
                                    <td className="text-right">{data.value}명</td>
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

export default Attendance;