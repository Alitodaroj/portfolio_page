import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from 'react-bootstrap';

function selectAll(selector) {
    return document.querySelectorAll(selector);
  }
  
  let navbarLinks = Array.from(selectAll('#navbar .scrollto'));
  
  const navbarLinksActive = () => {
    let position = window.scrollY + 200;
    navbarLinks.forEach(navbarLink => {
      if (!navbarLink.hash) return;
      let section = selectAll(navbarLink.hash);
      if (!section) return;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarLink.classList.add('active');
      } else {
        navbarLink.classList.remove('active');
      }
    });
  };
  
  window.addEventListener('load', navbarLinksActive);
  window.addEventListener('scroll', navbarLinksActive);
  

const NavBar = () => {
    return (
        <Navbar expand="dark" className="bg-body-tertiary fixed-top" variant="light">
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