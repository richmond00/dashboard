import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

class RankTable extends Component {    
    render() {

        return (
            <Table className="bg-white mt-2">
                <thead>
                    <tr>
                        <th>col1</th>
                        <th>col2</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>data1</td>
                        <td>data2</td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default RankTable;