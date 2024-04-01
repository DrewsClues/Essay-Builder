import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom"; 
import '../css-sheets/navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';




function Navigation() {
  return (
    <>
      <Navbar expand="lg" className="custom-navbar-main" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/"className='custom-navbar-brand-link'>Essay Builder</Navbar.Brand>
        <Navbar.Toggle className="custom-toggler"/>
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
              <Nav.Link as={Link} to="/persuasive" className='custom-navbar-links'>Persuasive</Nav.Link>
              <Nav.Link as={Link} to="/expository" className='custom-navbar-links'>Expository</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Navigation;