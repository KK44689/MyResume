import React, { useState  } from 'react';
import classes from './signupForm.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Form} from 'react-bootstrap';

function signupForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  
    return (
      <div className={classes.signupForm} >
        <Row>
          <Col sm={10} md lg={6}>
            <h1 className={classes.TextHeading}>Learn to code by <br />watching others</h1>
            <p className={classes.TextPara}>See how experienced developers solve problems in real-time.<br />
                watching scripted tutorials is great.<br />but understanding how
                developers think is invaluable.
                </p>
          </Col>
          <Col>
            <div className={classes.square}>
              <p><span>Try it free 7 days</span> then $20/mo. thereafter</p>
            </div>
            <Form className={classes.form} noValidate validated={validated} onSubmit={handleSubmit} method="POST">
              <Form.Group controlId="formFirstName" id={classes.FormInput} >
                <Form.Control size="lg" type="text" placeholder="First Name" required/>
              </Form.Group>
              <Form.Group controlId="formLLastName" id={classes.FormInput} >
                <Form.Control size="lg" type="text" placeholder="Last Name" required/>
              </Form.Group>
              <Form.Group controlId="formEmail" id={classes.FormInput} >
                <Form.Control size="lg" type="email" placeholder="Email Address" required/>
              </Form.Group>
              <Form.Group controlId="formPassword" id={classes.FormInput}>
                <Form.Control size="lg" type="password" placeholder="Password" required/>
              </Form.Group>
              <button type="submit" >
                CLAIM YOUR FREE TRIAL
              </button>
              <Form.Text className="text-muted" id={classes.Text}>
                By clicking the button.you are agreeing to our <span className={classes.Terms}>Terms and Services</span>
              </Form.Text>
            </Form>
          </Col>
        </Row>
      </div>
    );
}

export default signupForm;
