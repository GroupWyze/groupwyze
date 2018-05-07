import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ActionHome from 'material-ui/svg-icons/action/home';
import { red500 } from 'material-ui/styles/colors';
import { login, logout, isLoggedIn } from '../../utils/AuthService';

const appBarStyle = {
  fontFamily: "'Roboto Slab', serif",
  backgroundColor: red500
}

class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton {...this.props} label="Login" />
    );
  }
}

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={<IconButton> <MoreVertIcon /></IconButton>}
    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
    <MenuItem primaryText="My Page" />
    <MenuItem primaryText="New Event" />
    <MenuItem primaryText="Sign out" onClick={() => logout()} />
  </IconMenu>
);

Logged.muiName = 'IconMenu';

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class Navbar extends Component {

  constructor(props) {
    super(props);
  }

  getIconElementRight = () => {
    if (this.props.logged) {
      return <Logged />
    } else {
      return <Login onClick={() => login()} style={{ backgroundColor: red500, }} />
    }
  }

  getIconElementLeft = () => {
    return <IconButton>
      <ActionHome onClick={() => window.location.href = "/"} />
    </IconButton>
  }

  render() {
    return (
      <div>
        <AppBar style={appBarStyle} title="GroupWyze" iconElementLeft={this.getIconElementLeft()} iconElementRight={this.getIconElementRight()} />
      </div>
    );
  }
}

export default Navbar;