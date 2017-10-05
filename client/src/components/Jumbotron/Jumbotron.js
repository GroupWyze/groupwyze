import React, { Component } from 'react';


const jumbotronStyle = {
  paddingBottom: '55vh',
  boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)"
}

class Jumbotron extends Component {
  render() {
    return (
      <div className="card-panel grey lighten-2" style={jumbotronStyle}>
        <div className="container">
          <h1>Page Title</h1>
          <p>Lorem ipsum dolor sit amet, consectetur...</p>
        </div>
       </div>
    );
  }
}

export default Jumbotron;