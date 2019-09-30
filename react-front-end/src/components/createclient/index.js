import React, { Component, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CreateClient = () => {
    
        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [emailAddress, setEmailAddress] = useState('');
        const [businessPhone, setBusinessPhone] = useState('');
    

        return (
            <Form>
                <Form.Group controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name" value={firstName} onChange={e => setFirstName(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last Name"  value={lastName} onChange={e => setLastName(e.target.value)}></Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={async() => {
                    const client = {firstName, lastName};
    
                    const response = fetch('/create_client', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(client)
                    })
    
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