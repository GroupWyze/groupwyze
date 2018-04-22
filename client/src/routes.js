import React, { Component } from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import App from './App';
import Callback from './pages/Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import NoMatch from "./components/NoMatch";

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
    <Router history={history}>
      <div>
        <Route path="/" render={(props) => <App auth={auth} {...props} />} />
        <Route path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Callback {...props} />
        }} />
      </div>
    </Router>
  );
}

// render() {
//   return (

//     <MuiThemeProvider>
//       <div>
//         <Navbar
//           login={this.login}
//           logout={this.logout}
//           isAuthenticated={isAuthenticated}
//           goToUser={this.goTo('user')}
//           goToLand={this.goTo('')}
//           goToCB={this.goTo('callback')}
//           goToShindig={this.goTo('shindig')}
//           goToHome={this.goTo('')}
//         />


//         <Router history={history}>
//           <div>
//             <Route exact path="/callback" render={(props) => (<Callback auth={auth} {...props} />)} />
//             <Route exact path="/home" render={(props) => <Home auth={auth} {...props} />} />
//             <Route exact path="/user" render={(props) => <Home auth={auth} {...props} />} />
//             <Route path="/" render={(props) => <Home auth={auth} {...props} />} />
//             <Route component={NoMatch} />
//           </div>
//         </Router>
//       </div>
//     </MuiThemeProvider>
//   );
// }
