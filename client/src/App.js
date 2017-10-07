import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";

import './App.css';
import UserPage from './pages/Userpage.js';

class App extends Component {

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout(); 
  }

  render() {

    const { isAuthenticated } = this.props.auth;
    return (
      <MuiThemeProvider>
          <div>
            <Navbar 
              login={this.login.bind(this)} 
              logout={this.logout.bind(this)}
              isAuthenticated={isAuthenticated}
            />
            <Jumbotron />
          </div>
      </MuiThemeProvider>
    );
  }
}

export default App;