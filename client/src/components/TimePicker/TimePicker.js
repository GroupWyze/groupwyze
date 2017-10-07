import React from 'react';
import TimePicker from 'material-ui/TimePicker';

export default class TimePicker2 extends React.Component {
  constructor(props) {
      super(props);
      this.handleTimeChange = this.handleTimeChange.bind(this)
      
      this.state = {
        time: null,
      };
  }
    
  handleCalendarChange = (event, value) => {
      
      this.setState({
          time: value,
      });

      console.log(this.state);

  };    

  
  
  render() {
      return (
          <TimePicker
              hintText="Choose your event time"
              value={this.state.date}
              onChange={this.handleCalendarChange}
              mode="landscape"
          />
      );
  }
}
