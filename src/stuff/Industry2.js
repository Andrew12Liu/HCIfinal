import React from 'react'
import { Container, Form, Row, Col } from 'react-bootstrap';
import './general.css'


export default function Industry() {
  return (
    <Container fluid style={{fontSize:"14px", padding:1}}>
      <h5>Industry</h5>
      <Row>
        <Col>
          <Form.Select>
            <option>All Sectors (except Funds)</option>
            <option>Agriculture, Forestry, Fish</option>
            <option>Mining</option>
            <option>Construction</option>
            <option>Manufacturing</option>
            <option>Transportation and Utilities</option>
            <option>Wholesale Trade</option>
            <option>Retail Trade</option>
            <option>Financials</option>
            <option>Services</option>
            <option>Closed-End Funds</option>
          </Form.Select>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Select>
            <option>All Subsectors</option>
            <option>Food</option>
            <option>Tobacco</option>
            <option>Textile</option>
            <option>Electronics</option>
            <option>Chemicals</option>
            <option>Leather</option>
            <option>Plastics</option>
            <option>Transportation</option>
            <option>Lumber</option>
            <option>Paper</option>
            <option>Specialty Instruments</option>
          </Form.Select>
        </Col>
      </Row>
    </Container>
  )
}
