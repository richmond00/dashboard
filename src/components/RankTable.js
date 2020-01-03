import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

class RankTable extends Component {    
    render() {
        debugger;
        return (
            
            <div className="bg-white">
                <div className="mt-3">
                    <h5>타이틀</h5>
                </div>
                <div>
                    <Table className="bg-white mt-2">
                        <tbody>
                            <tr>
                                <td>{this.props.data.col1}</td>
                                <td>{this.props.data.col2}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default RankTable;