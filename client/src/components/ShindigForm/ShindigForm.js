import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TimePicker from '../TimePicker';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import Location from '../Location';

/**
 * Dialogs can be nested. This example opens a Date Picker from within a Dialog.
 */
export default class ShindigForm extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Create an Event!" onClick={this.handleOpen} />
        <Dialog
          title="Start a new Event! Tell us when and where to begin."
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          What date would you like?
          <DatePicker hintText="Date Picker" />
          What time would you like to begin?
          <TimePicker />
          <br />
          What city would you like to host in?
          <Location />
        
        </Dialog>
        
      </div>
    );
  }
}

