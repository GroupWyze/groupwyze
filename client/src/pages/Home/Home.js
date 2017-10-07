
import React, { Component } from 'react';
import Jumbotron from "../../components/Jumbotron";
import App from "../../App"


// TODO: YOU GOTTA CHANGE THIS TO THE LANDING PAGE OR TO SOMETHING
// Ideas: make it into a copy of the App page if its Authenticated or not. 
// Actually we might not even need this. 
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
