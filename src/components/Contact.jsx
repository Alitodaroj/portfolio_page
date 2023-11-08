import React from "react";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";

export default function Contact() {
    return(
        <section id="contact" classname="mt-4 mb-5">
             <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Enter Text Here</Form.Label>
        <Form.Control as="textarea" rows={4} />
      </Form.Group>
    </Form>
    <Button variant ="primary" type="submit">
        Submit
    </Button>
    </section>
    )
}
