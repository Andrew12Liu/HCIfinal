import React from "react";

import { Button, Container, Row, Col, Form } from "react-bootstrap";

import "./general.css";
import double from "./legend.json";

export default function Legend() {
  return (
    <Container fluid style={{fontSize:"14px", padding:1}}>
      <br/>
      <h4>Legend</h4>
      <Row className = "legendspacing">
        <Col className = "legend">
          {double.col1.map((x) => (
            <Row className = 'legendRow'>
              <Col className="legend"style = {{"backgroundColor" : `${x.color}` }}><b>{x.title}</b></Col>
              <Col className="legend" style = {{"backgroundColor" : `${x.color}`}}>
                {x.start}
              </Col>
            </Row>
          ))}
        </Col>
        <Col className = "legend">
          {double.col2.map((x) => (
              <Row className = 'legendRow'>
              <Col style = {{"backgroundColor" : `${x.color}`}} className="legend"><b>{x.title}</b></Col>
              <Col className="legend" style = {{"backgroundColor" : `${x.color}`}}>
                {x.start}
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
}
