import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker2 from '../DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TimePicker from '../TimePicker';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import Location from '../Location';
import API from "../../utils/API";

/**
 * Dialogs can be nested. This example opens a Date Picker from within a Dialog.
 */

let shindig = {
    date: "",
    time: "",
    location: ""
}

export default class ShindigForm extends React.Component {
  constructor() {
      super();
      this.state={
          open: false,
          date: "",
          time: "",
          location: ""
      };
      
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    // e.preventDefault();
    console.log(this);
    this.setState({open: false});


    // API.createShindig.(shindig);

  };

  handleCalendar = (e) => {
      e.preventDefault();
      //more code to capture and store the date. 

      console.log("handlecalendar THIS.State: ", this.state);
  }

  handleTime = (e) => {
      e.preventDefault();
      //more code to capture and store the time

      console.log("handleTime THIS.State: ", this.state);
      
  }

  handleLocation = (e) => {
      e.preventDefault();
      //more code to capture and store the location


      console.log("handleLocation THIS.State: ", this.state);
      
  }

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
          <DatePicker2 hintText="Date Picker" />
          <br />

          What time would you like to begin?
          <br />

          <TimePicker />
          <br />
          What city would you like to host in?
          <Location />
        
        {
        /* shindig = {
            date: this.datePicker,
            time: this.timePicker,
            location: this.location
        } 
        
        
        postNewShindig(shindig);
        getShindigId().then().redirect(shindigEventPage); */
        }
        </Dialog>
        
      </div>
    );
  }
}

