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
import {Button, Col, Container, Row } from "react-bootstrap";
import Searched from "./stuff/searched";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(false );
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
      <Button onClick = {() => setCount(true)} style = {{"width" : "10vw"}}> Search</Button>
      <Button onClick={() => window.location.reload(false)}>Clear</Button>
      <Legend />
     {count ? (<Searched/>) : (<></>)} 
      
    </Container>
  );
}

export default App;
