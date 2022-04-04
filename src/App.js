import logo from "./logo.svg";
import "./App.css";
import General from "./stuff/General";
import Date from "./stuff/Date";
import Industry from "./stuff/industry";
import Group from "./stuff/group";
import Checkmarks from "./stuff/checkmarks";
import Legend from "./stuff/legend";
import Navigation from "./stuff/nav";
import Filing from "./stuff/filing";
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
          <div className="padder" />
          <Industry />
        </Col>
        <Col>
          <Date />
          <div className="padder" />
          <Group />
        </Col>
        <Col>
          <Checkmarks />

          <div className="padder" />
          <Filing />
        </Col>
      </Row>
      <Row></Row>
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
