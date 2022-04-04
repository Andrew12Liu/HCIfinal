import React from 'react'

import {Button,Container,Row,Col,Form, Dropdown} from 'react-bootstrap';
import general from './industry.json'
import Drop from './dropdown';
import './general.css'


export default function Industry() {
  return (
<Container className = 'box'>
      <h1>Industry </h1>
      {general.stuff.map((x) => (
        <Row className="rowbox">
          <Col className="colbox">{x.title}</Col>
          <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder={`${x.range}`} />
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
  )
}
