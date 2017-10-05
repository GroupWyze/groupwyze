import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { makeMainRoutes } from './routes';
// import injectTapEventPlugin from 'react-tap-event-plugin';
 
// // Needed for onTouchTap
// // http://stackoverflow.com/a/34015469/988941
// injectTapEventPlugin();

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

const routes = makeMainRoutes();

ReactDOM.render(
  routes,
  document.getElementById('root')
);
