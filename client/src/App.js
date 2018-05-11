import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Shindig from "./pages/Shindig";
import UserPage from "./pages/UserPage";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Callback from "./components/Callback";
import { isLoggedIn } from "./utils/AuthService";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';

class App extends Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     profile: {}
  //   };
  // }

  renderRoutes = () => {
    // const { props } = this;
    // const { profile } = this.state;

    return (
      <BrowserRouter>
        <div>
          < Route exact path="/shindig/:shindigId" component={Shindig} />
          < Route exact path="/shindig" component={Shindig} />
          < Route exact path="/user/:userId" component={UserPage} />
          < Route exact path="/user" component={UserPage} />
          < Route exact path="/callback" component={Callback} />
          < Route exact path="/" component={Home} />
        </div>
      </BrowserRouter>
    );
  }

  render() {
    return (
      <MuiThemeProvider>
        < div>
          <Navbar logged={isLoggedIn()} />
          {this.renderRoutes()}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;