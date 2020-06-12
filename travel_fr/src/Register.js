import React, { Component } from "react";

import Cookies from "react-cookie";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        // this.logout = this.logout.bind(this);

    }

    componentDidMount() {
        console.log("welcome, componentDidMount state:", this.state);
    }

    render() {
        return (
            // <HashRouter>
            <React.Fragment>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                    </label>
                    <label>
                        Email:
                        <input name="email" type="email" value={this.state.email} onChange={this.handleChange} size="30" required />
                    </label>
                    <label>
                        Password:
                        <input name="password" type="password" value={this.state.password} onChange={this.handleChange} minLength="8" required />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </React.Fragment>
            // </HashRouter>
        );
    }
}

export default Register;
