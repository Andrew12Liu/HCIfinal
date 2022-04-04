import logo from "./logo.svg";
import "./App.css";
import General from "./stuff/General";
import Date2 from "./stuff/Date2";
import Industry2 from "./stuff/Industry2";
import Group from "./stuff/group";
import Checkmarks2 from "./stuff/checkmarks2";
import Legend from "./stuff/legend";
import Navigation from "./stuff/nav";
import Filing2 from "./stuff/Filing2";
import {Button, Col, Container, Row, Modal } from "react-bootstrap";
import Searched from "./stuff/searched";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons'


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Tips
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Navigation Tips</h4>
        <p>
          After entering your query, navigate below to see insider trade information, stock chart, and trade volume.

          Make use of all the query settings to get the exact trades you are looking for.

          Make sure to clear to go back to the top and clear the query.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyClearCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Warning
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
        Clearing will remove all your query settings.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>{props.onHide();window.location.reload(false);}}>Still Clear</Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [count, setCount] = useState(false );
  const [modalShow, setModalShow] = useState(false);
  const [clearmodalShow, clearsetModalShow] = useState(false);
  return (
    <Container className="main">
      <Navigation />
      <Row>
        <Col>
          <General />
        </Col>
      </Row>
      <Row>
        <Col>
          <Industry2 />
        </Col>
        <Col>
          <Date2 />
        </Col>
        <Col>
          <Checkmarks2 />
        </Col>
        <Col>
          <Filing2 />
        </Col>
      </Row>
      <>
      <Button onClick = {() => setCount(true)} style = {{"width" : "10vw"}}> Search</Button>
      {" "}
      <Button onClick={() => {clearsetModalShow(true);
        
      
      }}>Clear</Button>
      {" "}
      <Button variant="primary" onClick={() => setModalShow(true)}>
      <FontAwesomeIcon icon={faQuestion} />
      </Button>
      </>
      
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <MyClearCenteredModal
        show={clearmodalShow}
        onHide={() => clearsetModalShow(false)}
      />


      <Legend />
     {count ? (<Searched/>) : (<></>)} 
      
    </Container>
  );
}

export default App;
