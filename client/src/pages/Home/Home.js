
import React, { Component } from 'react';

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
      <div className="container">
        {/* {
          isAuthenticated() && (
              <h4>
                You are logged in!
              </h4>
            )
        }
        {
          !isAuthenticated() && (
              <h4>
                You are not logged in! Please{' '}
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={this.login.bind(this)}
                >
                  Log In
                </a>
                {' '}to continue.
              </h4>
            )
        } */}
      </div>
    );
  }
}

export default Home;
