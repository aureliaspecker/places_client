import React from 'react';
import PropTypes from 'prop-types';
import WebMap from './WebMap';

function Place(props) {

  return (
    <div>
      {props.text}
      <div>
        <WebMap />
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