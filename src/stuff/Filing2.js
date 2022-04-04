import { Col, Container, Form , Row } from 'react-bootstrap'
import checks from './filing.json'

export default function Filing() {
console.log(checks[0])
  return (
    <Container fluid style={{fontSize:"14px", padding:1}}>
    <h5>Insiders</h5>
    <Row>
      <Col>
        <Form>
          <Form.Group className = "mb-3" controlId="formBasicCheckBox">
            <Form.Check type = "checkbox" label = "COB"/>
            <Form.Check type = "checkbox" label = "CEO"/>
            <Form.Check type = "checkbox" label = "President"/>
            <Form.Check type = "checkbox" label = "COO"/>
            <Form.Check type = "checkbox" label = "CFO"/>
            <Form.Check type = "checkbox" label = "GC"/>
            <Form.Check type = "checkbox" label = "VP"/>
          </Form.Group>
        </Form>
      </Col>
      <Col>
        <Form>
          <Form.Group className = "mb-3" controlId="formBasicCheckBox">
            <Form.Check type = "checkbox" label = "Director"/>
            <Form.Check type = "checkbox" label = "10% Own"/>
            <Form.Check type = "checkbox" label = "Other"/>
          </Form.Group>
        </Form>
      </Col>
    </Row>
    </Container>
  )
}
