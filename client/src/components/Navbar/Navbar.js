import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ActionHome from 'material-ui/svg-icons/action/home';

import Auth from '../../auth/Auth.js';



// TODO: IN THIS COMPONENT SET THE HOOK FOR AUTH0
class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton {...this.props} label="Login"/>
    );
  }
}

// TODO: Set a Signup 

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="My Page" />
    <MenuItem primaryText="Create Shindig" />
    <MenuItem primaryText="Sign out"/>
  </IconMenu>
);

Logged.muiName = 'IconMenu';

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class Navbar extends Component {
  
  state = {
    logged: true,
  };

  handleChange = (event, logged) => {
    this.setState({logged: logged});
  };
  
  render() {
    const {isAuthenticated} = this.props.auth;

    console.log(this.props.logIn)
    // this.setState({logged: isAuthenticated()})
    return (
      <div>
        <AppBar
          title="GroupWyze"
          iconElementLeft={<IconButton ><ActionHome /></IconButton>}
          iconElementRight={isAuthenticated() ? <Logged /> : <Login />}
          
        />
        {/* <Toggle
          label="Logged"
          defaultToggled={true}
          onToggle={this.handleChange}
          labelPosition="right"
          style={{margin: 20}}
        /> */}
      </div>
    );
  }
}

export default Navbar;