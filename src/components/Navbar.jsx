import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
    const [expanded, setExpanded] = useState(false);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
            <Navbar expand="dark" expanded={expanded} className="bg-body-tertiary fixed-top" variant="light">
            <Container>
            <Navbar.Brand className="dark">
                Alan Rojas<br></br>Software Engineer
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded => !expanded)} />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Link to="/" className='nav-link'>Home</Link>
                <Nav.Link onClick={() => scrollToSection('about')}>About Me</Nav.Link>
                <Nav.Link onClick={() => scrollToSection('skills')}>Skills</Nav.Link>
                <Nav.Link onClick={() => scrollToSection('contact')}>Contact Me</Nav.Link>
                <Link to="/resume" className="nav-link">Resume</Link>            
            </Nav>
            </Navbar.Collapse>
            </Container>
             </Navbar>    )
}
export default NavBar;