import React, { Component }  from 'react';
import { Redirect, Route, Router, Switch} from 'react-router-dom';
import App from './App';
import Home from './pages/Home/Home';
import Callback from './pages/Callback/Callback';
import Navbar from "./components/Navbar";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Auth from './Auth/Auth';
import history from './history';
import NoMatch from "./components/NoMatch";

const auth = new Auth();
const {isAuthenticated } = auth

// export const makeMainRoutes = () => {

class Routes extends Component{

  constructor(props){
    super(props)

    this.state = {profile:{}}
    // History Routing Functions
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }


  goTo(route) {
    history.replace(`/${route}`)
  }
  login() {
    auth.login();
  }

  logout() {
    auth.logout(); 
  }
  
  render(){
  
    return (
      
        <MuiThemeProvider>
          <div>
          <Navbar
            login={this.login} 
            logout={this.logout}
            isAuthenticated={isAuthenticated}
            goToUser={this.goTo.bind(this,'user')}
            goToLand={this.goTo.bind(this, '')}
            goToCB={this.goTo.bind(this, 'callback')}
            goToShindig={this.goTo.bind(this,'shindig')}
            goToHome={this.goTo.bind(this, 'home')}
          />
        
          <Router history={history}>
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
          </div>
        </MuiThemeProvider>
      
    );
  }
}

export default Routes;
