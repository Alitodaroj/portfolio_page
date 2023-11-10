import React from "react";
import { Card, CardBody, Row, Col } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

function Skills() {
    return (
        <section id ="skills">
            <div className="bs-border-color text-black mb-5 pb-6">
                <Card className="mt-4">
                    <CardBody>
                        <h1>Skills & Technologies</h1>
                            <Row>
                            <Col>
                            <div>HTML5</div>
                            </Col>
                            <Col>
                                <div>CSS</div>
                            </Col>
                            <Col>
                                <div>Javascript</div>
                            </Col>
                        </Row>
                        <Row>
                        <Col>
                            <div>Python</div>
                        </Col> 
                        <Col>
                            <div>React</div>
                        </Col> 
                        <Col>
                            <div>Node.js</div>
                        </Col>
                        </Row>
                        <Row>
                        <Col>
                            <div>Express</div>
                        </Col> 
                        <Col>
                            <div>MongoDB</div>
                        </Col> 
                        <Col>
                            <div>Mongoose</div>
                        </Col>
                        </Row>
                        <Row>
                        <Col>
                            <div>Bootstrap</div>
                        </Col>
                        <Col>
                            <div>PostgreSQL</div>
                        </Col> 
                        <Col>
                            <div>Swift</div>
                        </Col>
                        </Row>
                    </CardBody>
                </Card>
            </div>
        </section>
    )
}

export default Skills;