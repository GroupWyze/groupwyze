import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Shindig from "./pages/Shindig";
import Navbar from "./components/Navbar";
import NoMatch from "./components/NoMatch";
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Shindig} />
              <Route exact path="/shindig/:shindigId" component={Shindig} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
