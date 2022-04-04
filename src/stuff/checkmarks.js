import ReacC from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import checks from "./checks.json";
import double from "./checksD.json";

export default function Checkmarks() {


  return (
    <Container className="box">
      <h1> Transaction Filing</h1>
      <Row>
        <Col>
          <Form>
            {checks.first.map((type) => (
              <div key={`${type.title}`}>
                <Form.Check type={"checkbox"} id={type.title} label={type.title} />
                {console.log(type)}
              </div>
            ))}
          </Form>
        </Col>
        <Col>
          <Form>
            {checks.second.map((type) => (
              <div key={`${type.title}`}>
                <Form.Check type={"checkbox"} id={type.title} label={type.title} />
                {console.log(type)}
              </div>
            ))}
          </Form>
        </Col>
        <Col>
          <Form>
            {checks.third.map((type) => (
              <div key={`${type.title}`}>
                <Form.Check type={"checkbox"} id={type.title} label={type.title} />
                {console.log(type)}
              </div>
            ))}
          </Form>
        </Col>
      </Row>
     
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
