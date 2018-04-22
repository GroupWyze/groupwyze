import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import Callback from './pages/Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import './index.css';

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

ReactDOM.render(
  <Router history={history}>
    <div>
      <Route path="/" render={(props) => <App auth={auth} {...props} />} />
      <Route path="/callback" render={(props) => {
        handleAuthentication(props);
        return <Callback {...props} />
      }} />
    </div>
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
