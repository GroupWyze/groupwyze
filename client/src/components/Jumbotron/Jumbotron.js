
import React, { Component } from 'react';
import Background from "../../../src/images/adult-bar.jpg";


const jumbotronStyle = {
  paddingBottom: '55vh',
  boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
  // backgroundImage: "url(" + Background + ")"
  background: "url(" + Background + ")",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  borderRadius: 0,
  margin: 0,
}

const imageStyle = {
  position: "absolute",
  maxWidth: "100%",
  maxHeight: "auto"
}

const headerStyle = {
  color: "white",
  fontStrength: "bold",
  fontSize: "60px",
  textAlign: "center"
}

const paragraphStyle = {
  color: "white",
  fontSize: "30px",
  textAlign: "center"
}

class Jumbotron extends Component {
  render() {
    return (
      <div className="card-panel grey lighten-2" style={jumbotronStyle}>
        {/* <img src={Background} style={{}} /> */}
        <div className="container">
          <h1 style={headerStyle}>Get your friends together</h1>
          <p style={paragraphStyle}>Search. Brainstorm. Vote.</p>
        </div>
      </div>
    );
  }
}

export default Jumbotron;