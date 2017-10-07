import React from 'react';
import TextField from 'material-ui/TextField';

export default class Location extends React.Component {
  constructor(props) {
      super(props);
      this.handleLocationChange = this.handleLocationChange.bind(this)
      
      this.state = {
        location: ""
      };
  }
    
  handleLocationChange = (event, value) => {
      
      this.setState({
        location: value
      });
      // console.log(this.state);
  };    



  render() {
    return (
      <div>
        <TextField
          name='location'
          id='value'
          value={this.state.value}
          onChange={this.handleLocationChange}
          floatingLabelText='City Desired'
          autoComplete='off'
        />
      <br />
      </div>
    );
  }
}