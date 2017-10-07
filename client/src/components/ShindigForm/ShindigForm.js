import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from '../DatePicker';
import Location from '../Location';
import API from "../../utils/API";
import TimePicker2 from '../TimePicker';


/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
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
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    let eventInfo = {
      date: "",
      time: "",
      location: "",
    }

    return (
      <div>
        <RaisedButton label="Create a new Event!" onClick={this.handleOpen} />
        <Dialog
          title="New Event Form"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          {/* The actions in this window were passed in as an array of React objects. */}

          <br />
          What date would you like?

        <DatePicker 
          
        />
          <br />
          What time would you like to begin?

        <TimePicker2 />
          <br />
          What city would you like to host in?

        <Location />
          <br />

        </Dialog>

      </div>
    );
  }
}