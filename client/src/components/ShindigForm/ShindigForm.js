import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import Location from '../Location';
import API from "../../utils/API";
import TimePicker2 from 'material-ui/TimePicker';
var moment = require('moment');

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
            city: "San Francisco",
            date: "",
            time: "",
            open: false,
            user_id: "user3000test"
        };
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
        setTimeout(console.log("here is final state: ",this.state), 3000);

        {
          let date = this.state.date;
          date = moment(date).format('L');

          console.log('the date: ',date);
          
          let time = this.state.time;
          time = moment(time).format('LT');
          console.log('time: ',time);

          let dateTime = moment(date + ' ' + time, 'MM/DD/YYYY HH:mm');

          console.log("final date time: ", dateTime);

          let newEvent = {
            
          }

          API.createShindig()

        }

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
        city: value
      });
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
                    <div>What date would you like?</div>

                    <DatePicker
                        value={this.state.date}
                        onChange={this.handleCalendarChange}
                    />
                    <br />
                    <div>What time would you like to begin?</div>

                    <TimePicker2 
                      value={this.state.time}
                      onChange={this.handleTimeChange}

                    />
                    <br />
                    <div>What city would you like to host in?</div>
                     <Location
                        id="value"
                        hintText=""

                        value={this.state.location}
                        onChange={this.handleLocationChange}
                    /> 
                    <br />

                </Dialog>

            </div>
        );
    }
}