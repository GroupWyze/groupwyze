import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
// import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ActionHome from 'material-ui/svg-icons/action/home';
import { red500 } from 'material-ui/styles/colors';

class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton {...this.props} label="Login" />
    );
  }
}

const Logged = (props) => (
  <IconMenu {...props} iconButtonElement={<IconButton>
    <MoreVertIcon />
  </IconButton>} targetOrigin={{ horizontal: 'right', vertical: 'top' }} anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
    <MenuItem primaryText="My Page" onClick={() => props.goTo('user')} />
    <MenuItem primaryText="New Event" onClick={() => props.goTo('shindig')} />
    <MenuItem primaryText="Sign out" onClick={() => props.logout()} />
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

    this.state = {
      logged: this.props.isAuthenticated()
    };
  }

  getIconElementRight = () => {
    if (this.state.logged) {
      return <Logged logout={this.props.logout} goToUser={this.props.goToUser} goToShindig={this.props.goToShindig} />
    } else {
      return <Login onClick={() => this.props.login()} style={{ backgroundColor: red500, }} />
    }
  }

  getIconElementLeft = () => {
    return <IconButton>
      <ActionHome onClick={() => this.props.goToHome()} />
    </IconButton>
  }

  render() {
    return (
      <div>
        <AppBar title="GroupWyze" iconElementLeft={this.getIconElementLeft()} iconElementRight={this.getIconElementRight()} />
      </div>
    );
  }
}

export default Navbar;