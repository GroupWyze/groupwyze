import React from 'react';
import { Redirect, Route, Router, Switch} from 'react-router-dom';
import App from './App';
import Home from './pages/Home/Home';
import Callback from './pages/Callback/Callback';
// import Shindig from "./pages/Shindig";
// import Userpage from './pages/Userpage.js';
import Auth from './Auth/Auth';
import history from './history';
import NoMatch from "./components/NoMatch";

const auth = new Auth();

export const makeMainRoutes = () => {

  const {isAuthenticated } = auth
  return (
    <Router history={history} component={App}>
      <div>
         
          <Route path="/" render={(props) => <App auth={auth} {...props} />} />
          
          <Switch>
            <Route path="/callback" render={(props) => (<Callback auth={auth} {...props} />)}/>
            <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
            <Route path="/shindig"/>
            <Route path="/user"/>
            <Route path="/"/>
            <Route component={NoMatch} />
          </Switch>
      </div>
    </Router>
  );
}

// <Route exact path="/" component={Shindig} />
// <Route exact path="/shindig/:shindigId" component={Shindig} />
// <Route component={NoMatch} />