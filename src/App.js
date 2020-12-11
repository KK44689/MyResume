import classes from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import Home from './App.js';

function App() {
  return (
    <div className="App">
      <Navbar fixed="top" expand="lg" id={classes.Nav} >
        <Navbar.Brand href="/Home" id={classes.navTitle}>Kirima Kangwanwongsakul's Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="./App.js" id={classes.navOption}>Online-Shopping page</Nav.Link>
            <Nav.Link href="#link" id={classes.navOption}>Signup Form page</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container fluid>
        <Row id={classes.profile}>
          <Col md lg="6">
            <img className={classes.ProfilePic} src="/ProfilePic.jpg" />
          </Col>
          <Col md lg="5">
            <h1 className={classes.profileTitle}>Profile</h1>
            <p className={classes.profileDetails}>
              <br />
              Name : Kirima Kangwanwongsakul<br /><br />
              Age : 20<br /><br />
              Tel : 094-481-8112<br /><br />      Line ID : seakirima<br /><br />
              E-mail : kirima111.04@gmail.com<br /><br />
              Address : 204  หมู่บ้านพงษ์ศิริชัย
              ถนนบรมราชชนนี แขวงศาลาธรรมสพน์
              เขตทวีวัฒนา กรุงเทพฯ  10170<br /><br />
            </p>
          </Col>
        </Row>
        <Row id={classes.education}>
          <Col >
            <h1 className={classes.eduTitle}>Education</h1>
            <p className={classes.eduDetails}>
              <br />
              - จบระดับชั้นมัธยมศึกษา จากโรงเรียนสตรีวิทยา ด้วยเกรดเฉลี่ย 3.54<br /><br />
              - กำลังศึกษาในระดับปริญญาตรี  สาขาคอมพิวเตอร์  คณะวิศวกรรมศาสตร์  มหาวิทยาลัยเกษตรศาสตร์ <br /><br />&nbsp;&nbsp;ด้วยเกรดเฉลี่ยสะสม  2.76
            </p>
          </Col>
        </Row>
        <Row id={classes.experience}>
          <Col>
            <h1 className={classes.expTitle}>Experience</h1>
            <p className={classes.expDetails}>
              <br />
              <span>2562</span> &nbsp;&nbsp;ค่ายพัฒนาซอฟต์แวร์สภาพการทำงานร่วมแบบเปิดกว้าง(eXceed Camp)<br /><br />
              <span>2563</span> &nbsp;&nbsp;คอร์สเรียนออนไลน์ udemy หัวข้อ Web Development Introduction<br /><br />
              <span>2563</span> &nbsp;&nbsp;คอร์สเรียนออนไลน์ udemy หัวข้อ React JS - A Complete Guide for Frontend Web Development<br /><br />
              <span>2563</span> &nbsp;&nbsp;ออกแบบ UX/UI ในรายวิชา  Software Engineering
            </p>
          </Col>
        </Row>
        <Row id={classes.skill}>
          <Col>
            <h1 className={classes.skillTitle}>Skill</h1>
            <p className={classes.skillDetails}>
              <br />
              - Python<br /><br />
              - UX/UI design(figma , framer)<br /><br />
              - html<br /><br />
              - Javascript<br /><br />
              - ReactJS<br /><br />
            </p>
          </Col>
          <Col>
            <p className={classes.skillDetails2}>
              <br />
              - CSS/SASS<br /><br />
              - Gulp<br /><br />
              - English<br /><br />
              - Bootstraps/React Bootstraps<br /><br />
              - Git<br /><br />
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
