import React from 'react';
import { Route, Router} from 'react-router-dom';
import App from './App';
import Home from './pages/Home/Home';
import Callback from './pages/Callback/Callback';
import Shindig from "./pages/Shindig";
import Auth from './Auth/Auth';
import history from './history';
import NoMatch from "./components/NoMatch";

const auth = new Auth();

export const makeMainRoutes = () => {
  return (
    <Router history={history} component={App}>
      <div>
        <Route path="/" render={(props) => <App auth={auth} {...props} />} />
        <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
        <Route path="/callback" render={(props) => <Callback {...props} />} />
        <Route exact path="/shindig/:shindigId" component={Shindig} />
        <Route component={NoMatch} />
        {/* <Route exact path="/" component={Shindig} /> */}
      </div>
    </Router>
  );
}

// <Route exact path="/" component={Shindig} />
// <Route exact path="/shindig/:shindigId" component={Shindig} />
// <Route component={NoMatch} />