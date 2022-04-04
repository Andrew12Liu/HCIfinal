import { Col, Container, Form, Row, InputGroup, FormControl } from "react-bootstrap";
import checks from "./checks.json";

export default function Checkmarks2() {
  console.log(checks[0]);

  return (
    <Container fluid style={{fontSize:"14px", padding:1}}>
    <h5>Transaction Filing</h5>
      <Row>
        <Col>
          <Form>
            <Form.Group className = "mb-3" controlId="formBasicCheckBox">
              <Form.Check type = "checkbox" label = "P-Purchase"/>
              <Form.Check type = "checkbox" label = "S-Sale"/>
              <Form.Check type = "checkbox" label = "A-Grant"/>
              <Form.Check type = "checkbox" label = "D-Sale to Lss"/>
            </Form.Group>
          </Form>
          </Col>
        
          <Col>
            <Form>
              <Form.Group className = "mb-3" controlId="formBasicCheckBox">
                <Form.Check type = "checkbox" label = "X-Option Ex"/>
                <Form.Check type = "checkbox" label = "C-CNV Deriv"/>
                <Form.Check type = "checkbox" label = "W-Inherited"/>
                <Form.Check type = "checkbox" label = "Multiple Days"/>
              </Form.Group>
            </Form>
          </Col>
      </Row>

      <Form>
        <Row>
          <Col>
            <Form.Label>Traded:</Form.Label>
          </Col>
          <Col>
            <InputGroup>
              <InputGroup.Text>$</InputGroup.Text>
              <FormControl type="number" placeholder="Min"/>
              <InputGroup.Text>K</InputGroup.Text>
            </InputGroup>
          </Col>
          <Col>
            <InputGroup>
              <InputGroup.Text>$</InputGroup.Text>
              <FormControl type="number" placeholder="Max"/>
              <InputGroup.Text>K</InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Label>Change in Ownership:</Form.Label>
          </Col>
          <Col>
            <InputGroup>
              <Form.Control type="number" placeholder="Min"/>
              <InputGroup.Text>%</InputGroup.Text>
            </InputGroup>
          </Col>
          <Col>
            <InputGroup>
              <Form.Control type="number" placeholder="Max"/>
              <InputGroup.Text>%</InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>
      </Form>

    </Container>
  );
}
