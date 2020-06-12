import React, { Component } from "react";
import { HashRouter, Switch, Route, Link } from "react-router-dom";

import Authentification from './Authentification';
import Login from './Login';
import Logo from './Logo';
import Register from './Register';
import './App.css';

import Cookies from "react-cookie";

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        // this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        console.log("welcome, componentDidMount state:", this.state);
    }

    // logout() {
    //     cookie.remove("userId", { path: "/" });
    //     cookie.remove("first", { path: "/" });
    //     cookie.remove("last", { path: "/" });
    //     cookie.remove("email", { path: "/" });
    //     window.location.replace("/");
    // }

    render() {
        return (
            <React.Fragment>
                <header className="w3-bar">
                    <h1>Welcome</h1>
                    <Logo/>
                </header>
                <main className="content ">
                <Route render={({ location }) => (
                    <Switch location={location}>
                        <Route
                            exact
                            path="/login"
                            render={(routeProps) => (
                                <Login />
                            )}
                        />
                        <Route
                            exact
                            path="/register"
                            render={(routeProps) => (
                                <Register />
                            )}
                        />
                    </Switch>
                )} />
                <Authentification />
                </main>
            </React.Fragment>
        );
    }
}

export default Welcome;
