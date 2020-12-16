import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Home from './Home';
import OnlineShop from './OnlineShop/Online_shop';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignupForm from './SignupForm/signupForm';

class App extends Component {
  render() {
    return (
      <Router>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Online_shop" component={OnlineShop}/>
            <Route exact path="/Signup_Form" component={SignupForm}/>
      </Router>
    );
  }
}

export default App;
