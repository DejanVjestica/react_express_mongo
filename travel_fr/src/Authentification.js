import React, { Component } from "react";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import Login from './Login';
import Register from './Register';

class Authentification extends Component {
    constructor(props) {
      super(props);
      this.state = {name: '', email: '', password: ''};
    }

    render() {
        return (
            <React.Fragment>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </React.Fragment>
         );
    }
}

  export default Authentification;