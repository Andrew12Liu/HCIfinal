import { Container, Row, Col, Form, InputGroup, Stack } from "react-bootstrap";
import React from "react";
import "./general.css";
export default function General() {
  return (
    <Container fluid style={{fontSize:"14px", padding:1}}>
      <h5>General</h5>
        <Form>
          <Form.Group as={Row}>
            <Form.Label column>Tickers:</Form.Label>
            <Col md={2}>
              <Form.Control type="formBasicEmail" placeholder="Symbols or CIKs"/>
            </Col>
            <Form.Label column>Insider:</Form.Label>
            <Col md={2}>
              <Form.Control type="formBasicEmail" placeholder="Symbols or CIKs"/>
            </Col>
              <Form.Label column>Share Price:</Form.Label>
            <Col>
              <InputGroup>
                <InputGroup.Text id = "dollar1">$</InputGroup.Text>
                <Form.Control type="number" placeholder="Min"/>
              </InputGroup>
            </Col>
            <Col>
              <InputGroup>
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control type="number" placeholder="Max"/>
              </InputGroup>
            </Col>
            <Form.Label column>Liquidity:</Form.Label>
            <Col>
              <InputGroup>
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control type="number" placeholder="Min"/>
              </InputGroup>
            </Col>
            <Col>
              <InputGroup>
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control type="number" placeholder="Max"/>
              </InputGroup>
            </Col>
          </Form.Group>
        </Form>
    </Container>
  );
}
