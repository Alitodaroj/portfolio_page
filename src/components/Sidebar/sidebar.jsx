import React from "react";
import Row from 'react-bootstrap/Row';
import { Container } from "react-bootstrap";
import './sidebar.css';

function Sidebar() {
    return (
        <Container className="Sidebar" data-bs-theme="primary">
            <Row>Technologies Used</Row>
            <Row>Projects</Row>
            <Row>Resume</Row>
            <Row>Contact Me</Row>
        </Container>
    )
}
export default Sidebar