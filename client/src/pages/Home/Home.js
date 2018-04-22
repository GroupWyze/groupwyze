
import React, { Component } from 'react';
import Jumbotron from "../../components/Jumbotron";

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    // const { isAuthenticated } = this.props.auth;
    return (
      <div>
        <Jumbotron />

      </div>
    );
  }
}

export default Home;
