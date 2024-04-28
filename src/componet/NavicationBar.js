// NavicationBar.js

import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import '@fortawesome/fontawesome-free/css/all.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
export default function NavicationBar() {
  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#"> ShaZZZ</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0" // Use me-auto for margin-right:auto to push navigation links to the left
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/product">
            Product
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
               About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
               Contact
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto"> {/* Use ms-auto for margin-left:auto to push buttons to the right */}
            <a href='' className='btn btn-outline-dark'><i className="fa fa-sign-in"></i> Login</a>
            <a href='' className='btn btn-outline-dark'><i className="fa fa-user-plus"></i> Register</a>
            <a href='' className='btn btn-outline-dark'><i className="fa fa-cart-plus"></i> Cart</a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  );
}
