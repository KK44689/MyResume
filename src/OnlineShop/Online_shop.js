import classes from './Online_shop.module.css';
import React, { Component } from 'react';
import ProductData from './ProductData'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col,Nav } from 'react-bootstrap';
import ProductPreview from './ProductPreview';
import ProductDetails from './ProductDetail';
import {Link} from 'react-router-dom';

class Online_shop extends Component {
  state = {
    productdata: ProductData,
    currentPreviewImage: 'https://imgur.com/iOeUBV7.png',
    currentPreviewImagePos: 0,
    ShowHeartbeatSection: false,
    currentFeaturePos: 0
  }

  onColorOptionsClick = (pos) => {
    const updatedProductPic = this.state.productdata.colorOptions[pos].imageUrl;
    this.setState({ currentPreviewImage: updatedProductPic })
    this.setState({ currentPreviewImagePos: pos })
  }

  onFeatureOptionsClick = (pos) => {
    if (pos === 1) {
      this.setState({ ShowHeartbeatSection: true })
      this.setState({ currentFeaturePos: pos })
    }
    else {
      this.setState({ ShowHeartbeatSection: false })
      this.setState({ currentFeaturePos: pos })
    }
  }

  render() {
    return (
      <div className={classes.Online_shop}>
        <Navbar fixed="top" expand="lg" id={classes.Nav} >
        <Navbar.Brand as={Link} to="/Home" id={classes.navTitle}>Kirima Kangwanwongsakul's Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/Online_shop" id={classes.navOption}>Online-Shopping page</Nav.Link>
            <Nav.Link as={Link} to="/Signup_Form" id={classes.navOption}>Signup Form page</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        <br /><br /><br /><br />
        <Container id={classes.Container}>
          <Row>
            <Col className={classes.ProductPreview} sm md lg={6}>
              <ProductPreview currentPreviewImage={this.state.currentPreviewImage}
                ShowHeartbeatSection={this.state.ShowHeartbeatSection}
              />
            </Col>
            <Col className={classes.ProductDetails} sm md lg={6}>
              <ProductDetails data={this.state.productdata}
                onColorOptionsClick={this.onColorOptionsClick}
                currentPreviewImagePos={this.state.currentPreviewImagePos}
                currentFeaturePos={this.state.currentFeaturePos}
                onFeatureOptionsClick={this.onFeatureOptionsClick}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Online_shop;
