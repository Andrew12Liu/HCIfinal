import React from "react";

import { Dropdown, Button, Container, Row, Col, Form } from "react-bootstrap";
import general from "./date.json";

import "./general.css";
import "../App.css";
import double from "./datedub.json";
import Drop from "./dropdown";

export default function Date() {
  return (
    <Container className="box">
      <h1>Date </h1>
      {general.fields.map((x) => (
        <Row className="rowbox">
          <Col className="colbox">{x.title}</Col>
          <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="number" placeholder={`${x.range}`} />
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
                <Form.Control type="date" placeholder={`${x.start}`} />
              </Form.Group>
            </Form>
          </Col>
          <Col className="col">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="date" placeholder={`${x.end}`} />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      ))}

      {general.drop.map((i) => (
        <Row>
          <Col>{i.sub}</Col>
          <Col>
          <Drop props = {i} />
          </Col>
        </Row>
      ))}
    </Container>
  );
}
