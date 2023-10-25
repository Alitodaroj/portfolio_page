import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar expand="dark" className="bg-body-tertiary" variant="light">
        <Container>
        <Navbar.Brand href="#home" className="dark">Alan Rojas<br></br>Software Engineer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#resume">Projects</Nav.Link>
            <Nav.Link href="#link">Resume</Nav.Link>
            <Nav.Link href="#link">Contact Me</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}
export default NavBar;