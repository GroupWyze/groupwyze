import React from 'react';
import "./Meter.css";


const Meter = props => {
  const {
    percent = 0,        // a number between 0 and 1, inclusive
    width = 50,         // the overall width
    height = 100,       // the overall height
    color = "#4f4",     // the fill color
    bgColor = "#ccc",   // the background color
    label = null        // a label to describe the contents (for accessibility)
  } = props;


  const h = percent ? Math.min(height, height * Math.min((1- percent), 1)) : 0;

  return (
    <svg width={width} height={height} aria-label={label}>
      <rect width={width} height={height} fill={color} rx='0' ry='0'/>
      <rect width={width} height={h} fill={bgColor} rx='0' ry='0'/>
    </svg>
  );
};

export default Meter;