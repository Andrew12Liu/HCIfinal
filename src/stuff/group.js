import React from "react";

import { Button, Container, Row, Col, Dropdown, Form } from "react-bootstrap";
import general from "./group.json";

import "./general.css";
import Drop from "./dropdown";

export default function Group() {
  return (
    <Container className="box">
      <h1>Sorting/Group by</h1>
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
