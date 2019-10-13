import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import "./style.css";
import Button from 'react-bootstrap/Button';

const Login = (props)  => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
      <div>
        <Form className="LoginModal" onSubmit={handleSubmit}>
            <Form.Group controlId="email" className="justify-content-md-center" className="Inputs">
                <Form.Row>
                    <Col>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </Col>
                </Form.Row>
            </Form.Group>

            <Form.Group controlId="password" className="justify-content-md-center" className="Inputs">
                <Form.Row>
                    <Col>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            autoFocus
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </Col>
                </Form.Row>
            </Form.Group>

            <Button disabled={!validateForm()} type="submit" onClick={async() => {
                const user = {email, password};

                const response = fetch('/login', {
                    method: 'POST',
                    headers: {
                        "Content_Type": "application/json"
                    }, 
                    body: JSON.stringify(user)
                })

                if(response.ok) {
                    console.log("Log in successful");
                }

            }}>Login</Button>
        </Form>
      </div>
    )
}

export default Login;