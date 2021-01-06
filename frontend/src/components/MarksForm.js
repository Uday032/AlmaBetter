import React, { Component } from 'react'
import {Form, Row, Col, Button} from 'react-bootstrap'

export default class MarksForm extends Component {
    constructor(){
        super();

        this.handleChangeRollno = this.handleChangeRollno.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePhysicsMarks = this.handleChangePhysicsMarks.bind(this);
        this.handleChangeMathsMarks = this.handleChangeMathsMarks.bind(this);
        this.handleChangeChemistryMarks = this.handleChangeChemistryMarks.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state= {
            'roll_no': '',
            'name': '',
            'physicsmarks': 0,
            'mathsmarks':0,
            'chemistrymarks':0,
            'totalmarks':0,

            'validated': {
                'roll_no': false,
                'name': false,
                'physicsmarks': false,
                'mathsmarks':false,
                'chemistrymarks':false,
            }
        };
    }

    handleChangeRollno(e){
        let value = (e.target.validity.valid) ? e.target.value : this.state.roll_no;
        this.setState({
            roll_no: value
        })
    }

    handleChangeName(e){
        let value = (e.target.validity.valid) ? e.target.value : this.state.name;
        this.setState({
            name: value
        })
    }

    handleChangePhysicsMarks(e){
        let value = (e.target.validity.valid) ? e.target.value : this.state.physicsmarks;
        this.setState({
            physicsmarks: value,
            totalmarks: Number(value) + Number(this.state.chemistrymarks) + Number(this.state.mathsmarks)
        })
    }

    handleChangeMathsMarks(e){
        let value = (e.target.validity.valid) ? e.target.value : this.state.mathsmarks;
        this.setState({
            mathsmarks: value,
            totalmarks: Number(value) + Number(this.state.chemistrymarks) + Number(this.state.physicsmarks)
        })
    }

    handleChangeChemistryMarks(e){
        let value = (e.target.validity.valid) ? e.target.value : this.state.chemistrymarks;
        this.setState({
            chemistrymarks: value,
            totalmarks: Number(value) + Number(this.state.mathsmarks) + Number(this.state.physicsmarks)
        })
    }

    handleSubmit(){
        console.log("submit");
    }

    render() {
        return (
            <Form className="mt-5">
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                    Roll No:
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control 
                        type="number" 
                        pattern="[0-9]*" 
                        placeholder="Enter Roll No: " 
                        name="roll_no"
                        value={this.state.roll_no}
                        onChange={this.handleChangeRollno}
                        isInvalid
                        required
                        // {let state = this.state.validated.roll_no ? isValid : isInvalid}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide roll number.
                    </Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                    Name:
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter Name " 
                        value={this.state.name}
                        onChange={this.handleChangeName}
                        isInvalid
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide Name.
                    </Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                    Physics:
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control 
                        type="number" 
                        pattern="[0-9]*" 
                        placeholder="Enter Physics Marks" 
                        value={this.state.physicsmarks==0 ? '' : this.state.physicsmarks }
                        onChange={this.handleChangePhysicsMarks}
                        isInvalid
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide Physics Marks.
                    </Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                    Maths: 
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control 
                        type="number" 
                        pattern="[0-9]*"  
                        placeholder="Enter Maths Marks" 
                        value={this.state.mathsmarks==0 ? '' : this.state.mathsmarks}
                        onChange={this.handleChangeMathsMarks}
                        isInvalid
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide Maths Marks.
                    </Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                    Chemistry: 
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control 
                        type="number" 
                        pattern="[0-9]*"    
                        placeholder="Enter Chemistry Marks" 
                        value={this.state.chemistrymarks==0 ? '' : this.state.chemistrymarks}
                        onChange={this.handleChangeChemistryMarks}
                        isInvalid
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide Chemistry Marks
                    </Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                    Total Marks: 
                    </Form.Label>
                    <Col sm={10} className="mt-2">
                        <Form.Label>{this.state.totalmarks}</Form.Label>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                    Total Percentage: 
                    </Form.Label>
                    <Col sm={10} className="mt-2">
                        <Form.Label>{(this.state.totalmarks/3).toFixed(2)}%</Form.Label>
                    </Col>
                </Form.Group>


                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit" onClick={this.handleSubmit}>Submit</Button>
                    </Col>
                </Form.Group>
            </Form>
        )
    }
}
