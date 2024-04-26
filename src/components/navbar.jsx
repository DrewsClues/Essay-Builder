import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
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



              <NavDropdown title="Compare & Contrast"  className='custom-navbar-links'   id="navbarScrollingDropdown">
                <Nav.Link as={Link} to="/blockmethod" className='custom-navbar-links'>Block Method</Nav.Link>
                <Nav.Link as={Link} to="/pointbypoint" className='custom-navbar-links'>Point by Point</Nav.Link>
              </NavDropdown>


          </Nav>
          
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Navigation;