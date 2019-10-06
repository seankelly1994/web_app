import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import original_billing from '../../assets/images/original_billing.png';
import './style.css';

const TopNavBar = () => {
    return (
      <Navbar className="TopBar">
        <Navbar.Brand href="#home">
          <img src={original_billing} width="50px"></img>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Clients</Nav.Link>
          <Nav.Link href="#pricing">Analytics</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
    </Navbar>
    )
}

export default TopNavBar;