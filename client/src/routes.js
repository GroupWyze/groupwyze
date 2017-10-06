import React, { Component } from 'react';
import { Route, Router, Switch} from 'react-router-dom';
import App from './App';
import Home from './pages/Home/Home';
import Callback from './pages/Callback/Callback';
import Shindig from "./pages/Shindig";
import Auth from './Auth/Auth';
import history from './history';
import NoMatch from "./components/NoMatch";
import Navbar from "./components/Navbar";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const auth0 = new Auth();
const RouteWithProps = ({ component: Component, props, ...extraProps }) => (
  <Route
    {...extraProps} 
    render={routeProps => <Component {...props} {...routeProps} />} 
  />
);

// export const makeMainRoutes = () => {
class AppRoutes extends Component{

  render(){
    return (
        <div>
        <Router history={history} > 
          <div>
            <RouteWithProps path="/" component={App} props={{auth: auth0}}>
              <Route path="/callback" component={Callback}/>
              <Route path="/home" component={Home}/>
              <Route exact path="/shindig/:shindigId" component={Shindig} />
              <Route component={NoMatch} />
            </RouteWithProps>
          </div>
        </Router>
        </div>
      );
  }

// <Route exact path="/" component={Shindig} />
// <Route exact path="/shindig/:shindigId" component={Shindig} />
// <Route component={NoMatch} />
// {/* render={(props) => <Callback {...props} />}  */}
// {/* render={(props) => <Home auth={auth} {...props} />}  */}
// render={(props) => <App auth={auth} {...props} />}
            // {/* <Route exact path="/" component={Shindig} /> */}
          // {/* </Switch>        */}
// 
// {/*component={App}*/}
}


export default AppRoutes;