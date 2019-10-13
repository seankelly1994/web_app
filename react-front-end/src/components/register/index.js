import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const Register = () => {


    return (
        <div>
            <Form>
                <Form.Row>
                    <Col>
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email"></Form.Control>
                        </Form.Group>
                    </Col>
                </Form.Row>           
            </Form>        
        </div>
    )
}

export default Register;