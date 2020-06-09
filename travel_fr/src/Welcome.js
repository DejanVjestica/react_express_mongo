import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';

import Cookies from "react-cookie";

class Welcome extends Component {
  constructor(props) {
      super(props);
      this.state = {};
      // this.logout = this.logout.bind(this);
  }
  componentDidMount() {
      // fetch("/users")
      //     .then(res => {
      //         // console.log("after fetch users", res);
      //         return res.json();
      //     })
      //     .then(users => {
      //         // console.log(users);
      //         this.setState({ users });
      //     });
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
          // <HashRouter>
              <React.Fragment>
                  <header className="w3-bar">
                    <h1>Welcome</h1>
                  </header>
                  <main className="content ">
                      {/* <h1 className="w3-center w3-margin-bottom">
                          Join hocaboo
                      </h1> */}
                      {/* {this.state.users.map(user => (
                          <div key={user.id}>
                              user: {user.name} Password: {user.password}
                          </div>
                      ))} */}
                      {/* <article className="">
                          <Route exact path="/login" component={Login} />
                          <Route
                              exact
                              path="/register"
                              component={Register}
                          />
                      </article> */}
                  </main>
              </React.Fragment>
          // </HashRouter>
      );
  }
}

export default Welcome;
