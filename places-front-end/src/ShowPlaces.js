import React from 'react';
import PropTypes from 'prop-types';
import Place from './Place';
import WebMap from './WebMap';

class ShowPlaces extends React.Component {

  constructor(props) {
    super(props)
    this.state = {selected:undefined}
  }

  onSelect = (selectedPlace) => {
    this.setState({selected: selectedPlace._id})
  }

  render() {

  const filteredPlaces = this.props.places.filter(place => (
    !!place.location && !!place.location.latitude && !!place.location.longitude
  ))
  
  const placesComponents = filteredPlaces.map(place => {
    const colour = place._id === this.state.selected ? '#33cc99': '#ff0000';
    return(
    <Place style={{color: colour}} key={place._id} text={place.name} lat={place.location.latitude} lng={place.location.longitude}/>
    )
  }); 
  
  return (
    
      <div>
        <WebMap places={filteredPlaces} onSelect={(this.onSelect)}/>
        {placesComponents}
      </div> 



    );
  }
}
  
  ShowPlaces.propTypes = {
    places: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string
    })).isRequired
  };
  
  export default ShowPlaces;