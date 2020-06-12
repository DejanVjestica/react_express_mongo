import React, { Component } from "react";

import Cookies from "react-cookie";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount() {
        console.log("welcome, componentDidMount state:", this.state);
    }

    handleChange(event) {
        console.log(event.target);

        const target = event.target;
        const name = target.name;
        const value = target.name === 'isGoing' ? target.checked : target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
      event.preventDefault();
      console.log(this.state);

    }

    render() {
        return (
            // <HashRouter>
            <React.Fragment>
                 <h1>Login</h1>
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

export default Login;
