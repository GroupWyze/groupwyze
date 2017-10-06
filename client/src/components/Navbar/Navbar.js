import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
// import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ActionHome from 'material-ui/svg-icons/action/home';

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
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="My Page" />
    <MenuItem primaryText="Create Shindig" />
    <MenuItem primaryText="Sign out" onClick={()=>props.logout()} />
  </IconMenu>
);

Logged.muiName = 'IconMenu';

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class Navbar extends Component {
  state = {
    logged: this.props.isAuthenticated(),
  };

  handleChange = (event, logged) => {
    this.setState({logged: logged});
  };

  render() {
    return (
      <div>
        <AppBar
          title="GroupWyze"
          iconElementLeft={<IconButton><ActionHome /></IconButton>}
          iconElementRight={this.state.logged ? 
            <Logged logout={this.props.logout}/> : <Login onClick={()=>this.props.login()}/>}
        />
      </div>
    );
  }
}

export default Navbar;