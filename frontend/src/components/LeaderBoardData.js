import React, { Component } from 'react'

export default class LeaderBoardData extends Component {

    render() {
        return (
            <tr>
                <td>{this.props.rollno}</td>
                <td>{this.props.name}</td>
                <td>{this.props.physicsmarks}</td>
                <td>{this.props.mathsmarks}</td>
                <td>{this.props.chemistrymarks}</td>
                <td>{this.props.totalmarks}</td>
                <td>{this.props.percentage}</td>
            </tr>
        )
    }
}
