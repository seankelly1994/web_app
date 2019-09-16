import React, { Component, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CreateClient extends Component {
    constructor(props) {
        super(props);

        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [emailAddress, setEmailAddress] = useState('');
        const [businessPhone, setBusinessPhone] = useState('');
    }
    
    render() {

        return (
            <Form>
                <Form.Group controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name"></Form.Control>
                </Form.Group>

                <Form.Group controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last Name"></Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        )
    }

}
export default CreateClient;