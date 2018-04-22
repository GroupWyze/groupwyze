import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Loader from "./components/Loader"
import Shindig from "./pages/Shindig";
import UserPage from "./pages/UserPage";
import Navbar from "./components/Navbar";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import history from './history';
import API from "./utils/API"

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      profile: {},
    };
  }

  goTo = route => {
    history.replace(`/${route}`)
  }

  login = () => {
    this.props.auth.login();
  }

  logout = () => {
    this.props.auth.logout();
  }

  getUser = () => {

    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({
          profile
        });
      });
    } else {
      this.setState({
        profile: userProfile
      });
    }
  }

  renderRoutes = () => {
    const { props } = this;
    const { isAuthenticated } = this.props.auth
    const { profile } = this.state;
    if (isAuthenticated()) {
      return (
        <BrowserRouter>
          <div>
            < Route exact path="/user/:userId" component={UserPage} />
            < Route exact path="/user" component={UserPage} />} />
            < Route exact path="/shindig/:shindigId" component={Shindig} />} />
            < Route exact path="/shindig" component={Shindig} />} />
          </div>
        </BrowserRouter>
      )
    }
  }

  render() {
    const { isAuthenticated, hasAccessToken } = this.props.auth;
    return (
      <MuiThemeProvider>
        < div>
          <Navbar
            login={this.login}
            logout={this.logout}
            isAuthenticated={isAuthenticated}
            goTo={this.goTo}
          />
          {this.renderRoutes()}

        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;