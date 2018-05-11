import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import API from "../../utils/API";
import { getCity, getZip } from "../../utils/GoogleMapsHelper";
import TimePicker2 from 'material-ui/TimePicker';
import moment from 'moment';


/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */

export default class ShindigForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      date: {},
      time: {},
      open: false,
      user: props.user,
      location: "",
      zip: ""
    };
  }

  handleOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  handleSubmit = () => {
    let date = moment(this.state.date).format('L');
    let time = moment(this.state.time).format('LT');
    let dateTime = moment(date + ' ' + time, 'MM/DD/YYYY HH:mm');
    let user_id = this.state.user ? this.state.user.sub : '';

    API.getGoogleGeocode(this.state.location)
      .then(response => {
        let city = getCity(response);
        let zip = getZip(response);

        this.setState({
          city,
          time: time,
          date: date,
          zip: zip,
          open: false
        }, () => {
          let newEvent = {
            user_id: user_id,
            city,
            shindigTime: dateTime,
            name: "Super Fun Extravaganza",
            address: this.state.location,
            zip: zip
          }

          API.createShindig(newEvent).then(res => {
            window.location.href = '/shindig/' + res.data.id;
          })
        })
      });
  };

  handleCalendarChange = (event, selectedDate) => {
    this.setState({
      date: selectedDate
    });
  };

  handleTimeChange = (event, selectedTime) => {
    this.setState({
      time: selectedTime
    });
  };

  handleLocationChange = (event, value) => {
    this.setState({
      location: value
    });
  };

  render() {
    const actions = [< FlatButton label="Cancel" primary={true} onClick={this.handleClose} />, < FlatButton label="Submit" primary={true} keyboardFocused={false} onClick={this.handleSubmit} />,
    ];

    return (
      <div>
        <RaisedButton label="Create" onClick={this.handleOpen} />
        <Dialog actions={actions} modal={false} open={this.state.open} onRequestClose={this.handleClose}>
          { /* The actions in this window were passed in as an array of React objects. */}
          <br />
          <h6>Select a Date</h6>
          <DatePicker value={this.state.date} onChange={this.handleCalendarChange} />
          < br />
          <h6>Select a Time</h6>
          <TimePicker2 value={this.state.time} onChange={this.handleTimeChange} />
          <br />
          <h6>Where will the event be hosted (i.e. city or address)?</h6>
          <TextField name='location' id='location' className='inactive' value={this.state.location} onChange={this.handleLocationChange} autoComplete='off' />
          < br />
        </Dialog>
      </div>
    );
  }
}