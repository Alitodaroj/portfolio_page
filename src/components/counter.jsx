import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";

let Counter = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col xs ={4}>
                        <Card classname="shadow-lg">
                            <Card.Body>
                                <p classname="display-2">count</p>
                                <Button variant>Increment</Button>
                            </Card.Body>

                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Counter;