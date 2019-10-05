import React, { Component, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import './style.css';

const CreateClient = () => {

        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [emailAddress, setEmailAddress] = useState('');
        const [businessPhone, setBusinessPhone] = useState('');
    

        return (
            <Form>
                <Form.Row controlId="formName" className="RowDetails" className="justify-content-md-center">
                    <Col sm={3}>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name" value={firstName} 
                                        onChange={e => setFirstName(e.target.value)}>
                        </Form.Control>
                    </Col>
                    <Col sm={3}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Last Name"  value={lastName}
                                        onChange={e => setLastName(e.target.value)}>
                        </Form.Control>
                    </Col>
                </Form.Row>

                <Form.Row controlId="formContactDetails" className="justify-content-md-center">
                    <Col sm={3}>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter Email" value={emailAddress} 
                                        onChange={e => setEmailAddress(e.target.value)}>
                        </Form.Control>
                    </Col>
                    <Col sm={3}>
                        <Form.Label>Business Phone</Form.Label>
                        <Form.Control type="text" placeholder="Enter Business Phone"  value={businessPhone} 
                                        onChange={e => setBusinessPhone(e.target.value)}>
                        </Form.Control>
                    </Col>
                </Form.Row>


                <Button variant="primary" type="submit" onClick={async() => {
                    const client = {firstName, lastName, emailAddress, businessPhone};
    
                    const response = fetch('/create_client', {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(client)
                    })

                    console.log(client);
    
                    if (response.ok) {
                        console.log('Response Worked')
                    }
                }}>
                    Submit
                </Button>
            </Form>
        )
    }

export default CreateClient;