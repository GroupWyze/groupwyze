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
let eventInfo = {
  date: "",
  time: "",
  location: "",
}

export default class ShindigForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        location: "",
        date: "",
        time: ""
    };
  }
  
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };


  handleCalendarChange = (event, date) => {
    this.setState({
      date: date,
    });
    eventInfo = {
      date: this.state.date,
    }
    console.log(eventInfo);
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

    return (
      <div>
        <RaisedButton label="Create a new Event!" onClick={this.handleOpen} />
        <Dialog
          title="New Event:"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          {/* The actions in this window were passed in as an array of React objects. */}

          <br />
          What date would you like?

        <DatePicker 
          value={this.state.date}
          onChange={() => this.handleCalendarChange}
        />
          <br />
          What time would you like to begin?

        <TimePicker2 />
          <br />
          What city would you like to host in?

        <Location 
          value={this.state.textFieldValue} 
          onChange={this._handleTextFieldChange}
        />
          <br />

        </Dialog>

      </div>
    );
  }
}