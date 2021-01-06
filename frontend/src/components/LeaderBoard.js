import React, { Component } from 'react'
import {Table} from 'react-bootstrap'

//components
import StudentData from './LeaderBoardData'

// axios import  
import instance from '../axios'

export default class LeaderBoard extends Component {

    constructor(){
        super();
        this.state = {
            studentdata: []
        }
    }

    componentDidMount() {
        instance.get('students/allmarks/')
            .then(response => {
                if(response.data.length>0) {
                    this.setState({
                        studentdata: response.data
                    })
                }
            })
    }

    render() {
        return (
            <Table className="mt-5">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Physics</th>
                    <th>Maths</th>
                    <th>Chemistry</th>
                    <th>Total Marks:</th>
                    <th>Percentage</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.studentdata.map((data) => 
                            <StudentData 
                                key = {data.id}
                                rollno= {data.roll_no}
                                name = {data.name}
                                physicsmarks ={data.physicsmarks}
                                mathsmarks = {data.mathsmarks}
                                chemistrymarks = {data.chemistrymarks}
                                totalmarks = {data.physicsmarks+ data.mathsmarks+ data.chemistrymarks}
                                percentage = {((data.physicsmarks+ data.mathsmarks+ data.chemistrymarks)/3).toFixed(2)}
                            />
                        )
                    }
                    
                </tbody>
            </Table>
        )
    }
}
