import { Button, Container, Row, Col, Form } from "react-bootstrap";
import general from "./general.json";
import React from "react";
import "./general.css";
import double from "./generalSingle.json";
export default function General() {
  return (
    <Container className="box">
      <h1>General</h1>

      {general.map((x) => (
        <Row className="rowbox">
          <Col className="colbox">{x.title}</Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder={`${x.range}`} />
            </Form.Group>
          </Form>
        </Row>
      ))}

      {double.map((x) => (
        <Row>
          <Col className="col">{x.title}</Col>
          <Col className="col">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="number" placeholder={`${x.start}`} />
              </Form.Group>
            </Form>
          </Col>
          <Col className="col">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="number" placeholder={`${x.end}`} />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      ))}
    </Container>
  );
}
