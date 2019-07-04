import React from 'react';
import PropTypes from 'prop-types';


function Place(props) {

  return (
    <div style = {props.style}>
      {props.text}
      <div id="container">
      </div>
    </div>


    );
  }
  
  Place.propTypes = {
      text: PropTypes.string.isRequired,
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired
  };
  
  export default Place;