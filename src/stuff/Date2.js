import React from "react";

import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";

import "./general.css";
import "../App.css";

export default function Date2() {
  return (
    <Container fluid style={{fontSize:"14px", padding:1}}>
      <h5>Date</h5>
      <Form>
        <Row>
          <Col md = {6}>
            <Form.Label style={{fontSize:"14px"}}>Number of Days Ago:</Form.Label>
          </Col>
          <Col md = {6}>
              <Form.Control type="number"/>
          </Col>
        </Row>
        <Row>
          <Col md = {4}>
            <Form.Label style={{fontSize:"14px"}}>Trading Date Range:</Form.Label>
          </Col>
          <Col md = {4}>
              <Form.Control type="date" placeholder="From" style={{fontSize:"14px"}}/>
          </Col>
          <Col md = {4}>
              <Form.Control type="date" placeholder="To" style={{fontSize:"14px"}}/>
          </Col>
        </Row>
        <Row>
          <Col md = {4}>
            <Form.Label style={{fontSize:"14px"}}>Filing Date Range:</Form.Label>
          </Col>
          <Col md = {4}>
              <Form.Control type="date" placeholder="From" style={{fontSize:"14px"}}/>
          </Col>
          <Col md = {4}>
              <Form.Control type="date" placeholder="To" style={{fontSize:"14px"}}/>
          </Col>
        </Row>
        <Row>
          <Col md = {4}>
            <Form.Label style={{fontSize:"14px"}}>Filing Delay:</Form.Label>
          </Col>
          <Col md = {4}>
            <InputGroup>
              <Form.Control type="number" placeholder="Min"/>
            </InputGroup>
          </Col>
          <Col md = {4}>
            <InputGroup>
              <Form.Control type="number" placeholder="Max"/>
            </InputGroup>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
