import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";


function NavBar() {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
            <Navbar expand="dark" className="bg-body-tertiary fixed-top" variant="light">
            <Container>
            <Navbar.Brand className="dark">
                Alan Rojas<br></br>Software Engineer
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link onClick={() => scrollToSection('about')}>About Me</Nav.Link>
                <Nav.Link onClick={() => scrollToSection('skills')}>Skills</Nav.Link>
                <Nav.Link onClick={() => scrollToSection('contact')}>Contact Me</Nav.Link>
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/Resume">Resume</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Container>
                </Navbar>    )
}
export default NavBar;