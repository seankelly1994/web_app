import React, { Component, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import api from '../../utils/api';
import './style.css';

class CreateClient extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            emailAddress: '',
            businessPhone: ''
        }
    }

    setFirstName = e => {
        this.setState({
            firstName: e.target.value
        });
    }

    setLastName = e => {
        this.setState({
            lastName: e.target.value
        });
    }

    setEmailAddress = e => {
        this.setState({
            emailAddress: e.target.value
        });
    }

    setBusinessPhone = e => {
        this.setState({
            businessPhone: e.target.value
        });
    }

    render() {
        const { firstName } = this.state;
        const { lastName } = this.state;
        const { emailAddress } = this.state;
        const { businessPhone } = this.state;

        return (
            <div className="ClientForm">
                <Form className="ClientFormInner">
                    <Form.Row controlId="formName" className="justify-content-md-center">
                        <Col sm={3}>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter First Name" value={this.firstName} 
                                            onChange={this.setFirstName}>
                            </Form.Control>
                        </Col>

                        <Col sm={3}>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Last Name" value={this.lastName} 
                                            onChange={this.setLastName}>
                            </Form.Control>
                        </Col>
                    </Form.Row>

                    <Form.Row controlId="formName" className="justify-content-md-center">
                        <Col sm={3}>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter Email" value={this.emailAddress} 
                                            onChange={this.setEmailAddress}>
                            </Form.Control>
                        </Col>

                        <Col sm={3}>
                            <Form.Label>Business Phone</Form.Label>
                            <Form.Control type="text" placeholder="Enter Business Phone" value={this.businessPhone} 
                                            onChange={this.setBusinessPhone}>
                            </Form.Control>
                        </Col>
                    </Form.Row>


                    <Button onClick={this.props.closeForm}>Cancel</Button>

                    <Button variant="primary" type="submit" onClick={async() => {
                        const client = {firstName, lastName, emailAddress, businessPhone};

                        try { 
                            const response = api.post('/create_client', client);
                            console.log(client);
                         } catch (err) { 
                            console.log(err);
                            } 
        
                    }}>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default CreateClient;