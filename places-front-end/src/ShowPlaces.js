import React from 'react';
import PropTypes from 'prop-types';
import Place from './Place';


function ShowPlaces(props) {
  
  const placesComponents = props.places.filter(place => (
    !!place.location && !!place.location.latitude && !!place.location.longitude
  )).map(place => (
    <Place key={place._id} text={place.name} lat={place.location.latitude} lng={place.location.longitude}/>
  )); 
  
  return (
    
      <div>
        {placesComponents}
      </div> 



    );
  }
  
  ShowPlaces.propTypes = {
    places: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string
    })).isRequired
  };
  
  export default ShowPlaces;