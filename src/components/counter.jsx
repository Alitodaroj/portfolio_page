import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import { useState } from "react";

const initialState = {
    count: 0
}

function Counter() {
let [state, setState] = useState(initialState);
  
  let incr = () => {
    setState({
      count: state.count + 1
    }
   )
  }
  
  let decr = () => {
    setState({
      count: state.count - 1
    }
   )
  }


    return (
        <>
            <Container>
                <Row>
                    <Col xs ={4}>
                        <Card classame="shadow-lg">
                            <Card.Body>
                                <p className="display-2">{ state.count }</p>
                                <Button onClick={incr} variant="success" className="m-1">Increment</Button>
                                <Button onClick={decr} variant="warning">Decrement</Button>
                            </Card.Body>

                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Counter