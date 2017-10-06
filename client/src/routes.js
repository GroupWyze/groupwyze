import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home/Home';
import Callback from './pages/Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';

const auth = new Auth();

export const makeMainRoutes = () => {
  return (
    <BrowserRouter history={history} component={App}>
      <div>
        <Route path="/" render={(props) => <App auth={auth} {...props} />} />
        <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
        <Route path="/callback" render={(props) => <Callback {...props} />} />
      </div>
    </BrowserRouter>
  );
}