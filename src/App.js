import classes from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import Home from './App.js';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" expand="lg" id={classes.Nav} >
        <Navbar.Brand href="/Home" id={classes.navTitle}>Kirima Kangwanwongsakul's Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="./App.js" id={classes.navOption}>Online-Shopping page</Nav.Link>
            <Nav.Link href="#link" id={classes.navOption}>Signup Form page</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container fluid id={classes.container}>
        <Row>
          <Col md lg="6">

          </Col>
          <Col md lg="5" id={classes.profile}>
            <h1 className={classes.profileTitle}>Profile</h1>
            <p className={classes.profileDetails}>
              Name : Kirima Kangwanwongsakul<br />
              Age : 20<br />
              Tel : 094-481-8112<br />      Line ID : seakirima<br />
              E-mail : kirima111.04@gmail.com<br />
              Address : 204  หมู่บ้านพงษ์ศิริชัย
              ถนนบรมราชชนนี แขวงศาลาธรรมสพน์
              เขตทวีวัฒนา กรุงเทพฯ  10170<br />
            </p>
          </Col>
        </Row>
        <Row>
          <Col id={classes.education}>
            <h1 className={classes.eduTitle}>Education</h1>
            <p className={classes.eduDetails}>
              - จบระดับชั้นมัธยมศึกษา จากโรงเรียนสตรีวิทยา ด้วยเกรดเฉลี่ย 3.54<br />
              - กำลังศึกษาในระดับปริญญาตรี  สาขาคอมพิวเตอร์  คณะวิศวกรรมศาสตร์  มหาวิทยาลัยเกษตรศาสตร์ <br/>&nbsp;&nbsp;ด้วยเกรดเฉลี่ยสะสม  2.76
            </p>
          </Col>
        </Row>
        {/* <Row>
          <Col>
          ,</Col>
        </Row> */}
      </Container>
    </div>
  );
}

export default App;
