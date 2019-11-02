import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import './style.css';
import api from '../../utils/api/index';
import { Redirect } from 'react-router-dom';

const Register = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validateForm = () => {
        return email.length > 0 && password.length > 0;
      }

    if (props.isAuthenticated()) {
        return <Redirect to ='/dashboards'></Redirect>;
    }

    return (
        <div>
            <Form className="RegisterModal">
                <Form.Group controlId="name" className="justify-content-md-center" className="Inputs">
                    <Form.Row>
                        <Col>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="email" placeholder="Enter First Name"
                                autoFocus
                                type="text"
                                value={firstName}
                                onChange={e => setFirstName(e.target.value)}
                            ></Form.Control>
                        </Col>

                        <Col>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="email" placeholder="Enter Last Name"
                                autoFocus
                                type="text"
                                value={lastName}
                                onChange={e => setLastName(e.target.value)}
                            ></Form.Control>
                        </Col>
                    </Form.Row>
                </Form.Group> 
                
                <Form.Group controlId="email" className="justify-content-md-center" className="Inputs">
                    <Form.Row>
                        <Col>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email"
                                autoFocus
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            ></Form.Control>
                        </Col>
                    </Form.Row>
                </Form.Group>

                <Form.Group controlId="password" className="justify-content-md-center" className="Inputs">
                    <Form.Row>
                        <Col>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password"
                                autoFocus
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            ></Form.Control>
                        </Col>
                    </Form.Row>
                </Form.Group>
               
            
                <Button disabled={!validateForm()} onClick={async() => {
                    const response = api.post('/register', {
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        password: password
                    }).then(function(response){
                        window.localStorage.setItem('token', response.data.auth_token);
                        console.log(response);
                    }).catch(function(error){
                        console.log(error);
                    })
                }}>Register</Button>
            
            </Form>
        </div>
    )
}

export default Register;

/*

const user = {firstName, lastName, email, password};

                    const response = fetch('/register', {
                        method: 'POST',
                        headers: {
                            "Content_Type": "application/json"
                        }, 
                        body: JSON.stringify(user)
                    })

                    console.log("Success");

                    if(response) {
                        console.log(response);
                    }*/