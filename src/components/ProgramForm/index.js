import React, { Component } from 'react';
import { Container, Form, Button, FormGroup, CustomInput } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import './style.css'

class SCEForm extends Component {
    state = {
        firstName: "John",
        lastName: "Doe",
        programs: ["Microsoft Office", "Visual Studio", "Adobe Acrobat", "Google Chrome", "SharePoint Designer", "Eclipse"]
    }

    onChangeHandler = (e) => {
        e.preventDefault();
        this.setState({ [e.target.id]: e.target.value })
    }

    onButtonClickedHandler = (e) => {
        this.props.updateProgress();
        this.props.history.push('/')
    }

    createProgramCheckboxes = () => {
        return (
            this.state.programs.map((prgm, index) => <CustomInput type="checkbox" id={index} label={prgm} />)
        )
    }

    render() {
        return (
            <Container className="Container">
                <h2 className="programform-title">Programs<small>Choose the programs you want to save:</small></h2>
                <Form className="Form">
                    {
                        // need to add a table with Publisher, App Name, and Version
                        //give options Yes, No, Unsure (with textbox appearing if selected) <- can do this part later
                        /* <FormGroup>
                        <div className="programform-program-checkbox">
                            {this.createProgramCheckboxes()}
                        </div>
                    </FormGroup> */
                    }
                </Form>
                <Button onClick={this.onButtonClickedHandler}>Next</Button>
            </Container>
        )
    }
}

export default withRouter(SCEForm);