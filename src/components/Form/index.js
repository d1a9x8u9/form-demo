import React, { Component } from 'react';
import { Col, Container, Form, Input, Button, FormGroup, Label } from 'reactstrap'
import { getDataFromDb } from './../../db'
import { withRouter } from 'react-router-dom'
import './style.css'

class SCEForm extends Component {
    state = {
        firstName: null,
        lastName: null,
        building: null,
        deptName: null,
        device: null,
        deptList: ["Human Resources", "EAM", "Mobility/Portal", "SharePoint", "Other"],
        buildingList: ["G-01", "G-02", "G-03", "G-04", "G-05"],
        deviceList: ["0001", "0002", "0003", "0004"] 
    }

    getListOfOptionsForObject = (obj) => {
        return (
            this.state[obj].map((el, index) => <option>{el}</option>)
        )
    }
    
    componentDidMount() {
        this.setState({
            firstName: "John",
            lastName: "Doe"
        })
        console.log(getDataFromDb());
    }

    onChangeHandler = (e) => {
        e.preventDefault();
        this.setState({[e.target.id]: e.target.value})
    }

    onButtonClickedHandler = (e) => {
        this.props.updateProgress();
        this.props.history.push('/2')
    }

    render() {
        return (
            <Container className="Container">
                    <h2 className="form-title">Employee Information<small>Select the correct information:</small></h2>
                <Form>
                    <FormGroup row>
                        <Label for="userID" sm={2}>User ID</Label>
                        <Col sm={9}>
                            <Input type="text" name="uid" id="userID" value="12345" disabled/>
                        </Col>
                        { this.state.userID != null ? <span className="fas fa-check fa-lg form-success-icon" style={{color: "green"}}></span> : null }
                    </FormGroup>
                    <FormGroup row>
                        <Label for="firstName" sm={2}>First Name</Label>
                        <Col sm={9}>
                            <Input type="text" name="fName" id="firstName" value="John" disabled/>
                        </Col>
                        { this.state.firstName != null ? <span className="fas fa-check fa-lg form-success-icon" style={{color: "green"}}></span> : null }
                    </FormGroup>
                    <FormGroup row>
                        <Label for="lastName" sm={2}>Last Name</Label>
                        <Col sm={9}>
                            <Input type="text" name="lName" id="lastName" disabled value="Doe"/>
                        </Col>
                        { this.state.lastName != null ? <span className="fas fa-check fa-lg form-success-icon" style={{color: "green"}}></span> : null }
                    </FormGroup>
                    <FormGroup row>
                        <Label for="deptName" sm={2}>Operating Unit</Label>
                        <Col sm={9}>
                            <Input type="select" name="selectDept" id="deptName" onChange={this.onChangeHandler}>
                                <option></option>
                                {this.getListOfOptionsForObject("deptList")}
                            </Input>
                        </Col>
                        { this.state.deptName != null ? <span className="fas fa-check fa-lg form-success-icon" style={{color: "green"}}></span> : null }
                    </FormGroup>
                    <FormGroup row>
                        <Label for="selectLocation" sm={2}>Location</Label>
                        <Col sm={9}>
                            <Input type="select" name="selectLocation" id="location" onChange={this.onChangeHandler}>
                                <option></option>
                                {this.getListOfOptionsForObject("buildingList")}
                            </Input>
                        </Col>
                        { this.state.building != null ? <span className="fas fa-check fa-lg form-success-icon" style={{color: "green"}}></span> : null }
                    </FormGroup>
                    <FormGroup row>
                        <Label for="selectDevice" sm={2}>Primary Device</Label>
                        <Col sm={9}>
                            <Input type="select" name="selectDevice" id="device" onChange={this.onChangeHandler}>
                                <option></option>
                                {this.getListOfOptionsForObject("deviceList")}
                            </Input>
                        </Col>
                        { this.state.device != null ? <span className="fas fa-check fa-lg form-success-icon" style={{color: "green"}}></span> : null }
                    </FormGroup>
                </Form>
                <Button onClick={this.onButtonClickedHandler}>Next</Button>

            </Container>
        )
    }
}

export default withRouter(SCEForm);