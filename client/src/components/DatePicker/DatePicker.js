import React from 'react';
import DatePicker from 'material-ui/DatePicker';

/**
 * The Date Picker defaults to a portrait dialog. The `mode` property can be set to `landscape`.
 * You can also disable the Dialog passing `true` to the `disabled` property.
 * To display the year selection first, set the `openToYearSelection` property to `true`.
 */

export default class DatePicker2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          date: null,
        };
    }
      
    handleCalendarChanges = (event, value) => {
        this.setState({
            date: value,
        });
        console.log(this.state);

    };    

    render() {
        return (
            <DatePicker
                hintText="Choose your event date"
                value={this.state.date}
                onChange={this.handleCalendarChanges}
                mode="landscape"
            />
        );
    }
}
