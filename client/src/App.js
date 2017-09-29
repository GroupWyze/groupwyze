import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Shindig from "./pages/Shindig";
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Shindig />
      </MuiThemeProvider>
    );
  }
}

export default App;
