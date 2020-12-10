import classes from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Navbar,Nav} from 'react-bootstrap'; 
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
    </div>
  );
}

export default App;
