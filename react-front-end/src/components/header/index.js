import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './style.css';
import Form from 'react-bootstrap/Form';

const Header = (props) => {
  return (
    <Navbar className="Topbar">
      <Form inline>
        <Nav className="mr-auto">
          <Nav.Link href="/logout" className="Item"></Nav.Link>
        </Nav>
    </Form>
    </Navbar>
  )
}

export default Header;