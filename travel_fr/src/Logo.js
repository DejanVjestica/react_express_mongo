import React, { Component } from "react";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import Login from './Login';
import Register from './Register';
import logo from './logo192.png';

class Authentification extends Component {
    constructor(props) {
      super(props);
      this.state = {name: '', email: '', password: ''};
    }

    render() {
        return (
            <React.Fragment>
                <Link to="/">Home</Link>
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
            </React.Fragment>
         );
    }
}

  export default Authentification;