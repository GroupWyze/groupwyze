import React, { Component } from 'react';
import { Redirect, Route, Router, Switch} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from "./components/Navbar";
import Shindig from "./pages/Shindig";
import UserPage from "./pages/UserPage.js";
import API from "./utils/API"

import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { profile: {}}
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.goToUser = this.goToUser.bind(this);
    this.goToLand = this.goToLand.bind(this);
    this.goToCB = this.goToCB.bind(this);
    this.goToShindig = this.goToShindig.bind(this);
    this.goToHome = this.goToHome.bind(this);
    this.getUser = this.getUser.bind(this);

  }

  getUser(){
    this.setState({profile:{}})
    const {userProfile, getProfile} = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({profile});
      });
    } else {
      this.setState({profile : userProfile});
    }
  }

  goToUser() {
    this.props.history.replace(`/user`)
  }

  goToLand() {
    this.props.history.replace('/')
  }

  goToCB() {
    this.props.history.replace(`/callback`)
  }

  goToShindig() {
    this.props.history.replace(`/shindig`)
  }

  goToHome(){
    this.props.history.replace(`/home`)
  }

  // TODO: When the state changes, send it directly to the API
  // componentWillUpdate(){
  //   console.log(this.state.profile)
  // }

  // Currently grabbing the user when the login button unmounts because we know for sure it does that
  // since this function simply calls up the authlock (aka the login/sign up page)
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
              login={this.login} 
              logout={this.logout}
              isAuthenticated={isAuthenticated}
              goToUser={this.goToUser}
              goToLand={this.goToLand}
              goToCB={this.goToCB}
              goToShindig={this.goToShindig}
              goToHome={this.goToHome}

            />
            
            {/* <Route exact path="/user" render={(props) => (
              !props.auth.isAuthenticated() ? (
                <Redirect to="/home" />
              ) : (
                <UserPage user={this.state.profile} {...props} />
              )
            )}/> */}
            <Route exact path="/user" render={(props) => (
              !isAuthenticated() ? (
                <Redirect to="/home" />
              ) : (
                <UserPage getUser={this.getUser()} profile={this.state.profile} {...props} />
              )
            )}/>
            <Route exact path="/shindig/:shindigId" render={(props) => (
              !isAuthenticated() ? (
                <Redirect to="/home" />
              ) : (
                <Shindig getUser={this.getUser()} profile={this.state.profile} {...props} />
              )
            )}/>
            <Route exact path="/shindig" render={(props) => (
              !isAuthenticated() ? (
                <Redirect to="/home" />
              ) : (
                <Shindig getUser={this.getUser()} profile={this.state.profile} {...props} />
              )
            )}/>
           
           
          </div>
      </MuiThemeProvider>
    );
  }
}

export default App;


// <Switch>
// <Route exact path="/" component={Shindig} />
// <Route exact path="/shindig/:shindigId" component={Shindig} />
// <Route component={NoMatch} />
// </Switch>

{/* <Route exact path="/shindig" render={(props) => <Shindig user={this.state.profile} {...props} />}/> */}
            <Route exact path="/shindig/:shindigId" render={(props) => <Shindig user={this.state.profile} {...props} />}/>