import React, { Component } from 'react';
import { Redirect, Route, Switch} from 'react-router-dom';
import Loader from "./components/Loader"
import Shindig from "./pages/Shindig";
import UserPage from "./pages/UserPage";
import API from "./utils/API"

import './App.css';

class App extends Component {

  state = {}
  constructor(props) {
    super(props);
    this.getUser = this.getUser.bind(this);

  }

  componentWillUpdate(){
    
    if(!this.state.profile){
      return
    }
    // Remember to Use default photos
    const {sub, name, picture, email} = this.state.profile
    
    // check if user already in database. 
    // if they are check if they have a userprofiles
    // if thats the case we use that for the view
    // load id into their url

    //sample data, sub is the authId
    // { "sub": "facebook|10159922711975643", "given_name": "De", "family_name": "En", "nickname": "azhar.deen", "name": "De En", "picture": "https://scontent.xx.fbcdn.net/v/t1.0-1/c20.0.50.50/p50x50/22050271_10159894352220643_5783112955870713677_n.jpg?oh=3c3465620f7bdbc7959977e45ac99e2a&oe=5A808FE9", "gender": "male", "locale": "en-US", "updated_at": "2017-10-07T12:04:54.000Z", "email": "azhar.deen@roche.com", "email_verified": true }
  }
  // lift state
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

  render() {
    
    const { isAuthenticated, hasAccessToken } = this.props.auth;
    const {profile} = this.state
    return (
     
        <div>
          
          <Loader auth={this.props.auth} getUser={this.getUser}/>
          {/* {JSON.stringify(profile, null, 2)} */}
          <Route exact path="/user/" userProfile={profile} 
          render={(props) => (
            !isAuthenticated() ? (
              <Redirect to="/user" />
            ) : (
              <UserPage profile={this.props.userProfile} {...props} />
            )
          )}/>
          <Route exact path="/user" userProfile={this.props.profile} 
          render={(props) => (
            !isAuthenticated() ? (
              <Redirect to="/user" />
            ) : (
              <UserPage profile={this.props.userProfile} {...props} />
            )
          )}/>
          <Route exact path="/shindig/:shindigId" userProfile={this.props.profile} 
          render={(props) => (
            !isAuthenticated() ? (
              <Redirect to="/user" />
            ) : (
              <Shindig profile={this.props.userProfile} {...props} />
            )
          )}/>
          <Route exact path="/shindig" userProfile={this.props.profile} 
          render={(props) => (
            !isAuthenticated() ? (
              <Redirect to="/user" />
            ) : (
              <Shindig profile={this.props.userProfile} {...props} />
            )
          )}/>
             
        </div>
      

    );
  }
}

export default App;