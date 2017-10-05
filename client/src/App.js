import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Shindig from "./pages/Shindig";
import Navbar from "./components/Navbar";
import NoMatch from "./components/NoMatch";
import Jumbotron from "./components/Jumbotron";
import './App.css';


import {indigo500, indigo700, redA200} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


// TODO: Edit Theme Colors 
// const muiTheme = getMuiTheme({
//   palette: {
//     primary1Color: indigo500,
//     primary2Color: indigo700,
//     accent1Color: redA200,
//     pickerHeaerColor: indigo500,
//   },
// }); {/*muiTheme={muiTheme}*/}

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }
  
  render() {
    // return (
    //   <MuiThemeProvider> 
    //     <Router>
    //       <div>
    //         <Navbar 
    //           goToHome={this.goTo.bind(this, 'home')} 
    //           login={this.login.bind(this)}
    //           logout={this.logout.bind(this)}
    //           auth={isAuthenticated}/>
    //         <Jumbotron />
            
    //       </div>
    //     </Router>
    //   </MuiThemeProvider>
    // );

    return (
      <MuiThemeProvider> 
        <Router>
          <div>
            <Navbar 
              
              auth={this.props.auth}
            />
            <Jumbotron />
            {/* <Switch>
              <Route exact path="/" component={Shindig} />
              <Route exact path="/shindig/:shindigId" component={Shindig} />
              <Route component={NoMatch} />
            </Switch> */}
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;

// goToHome={this.goTo.bind(this, 'home')}
// logIn={this.login.bind(this)}