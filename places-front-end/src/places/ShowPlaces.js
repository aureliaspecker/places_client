import React from 'react';
import PropTypes from 'prop-types';
import Place from './Place';
import {WebMap, MapMarker} from '../map';
import AddPlaceForm from './AddPlaceForm';
import { addPlace, getPlaces } from './placesApi';
class ShowPlaces extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {selectedPlace:undefined, isAddingPlace:false, places:[]}
  }
  
  componentWillMount () {
    getPlaces().then(places => this.setState({places}))
  }

  onSelect = (selectedPlace) => {
    this.setState({selectedPlace: selectedPlace})
  }

  onRequestAdd = (addRequest) => {
    this.setState({selectedPlace: undefined, isAddingPlace: true, addRequest:addRequest})
    console.log(addRequest)
  }

  submitPlace = (place) => {
    addPlace(place)
    .then(didSucceed => this.setState({isAddingPlace: !didSucceed}))
  }
  // pop up style (use library)
  renderAddPlace() {
    return(
      <div>
        <AddPlaceForm addRequest={this.state.addRequest} onSubmitPlace={this.submitPlace}/>
      </div>
    )
  }

  render() {

  const ShowPlacesStyle = {
    display: 'flex', 
    flexDirection: 'row',
    padding: '5px',
    margin: '30px'
  }
  
  const markers = this.state.places.map(place => (
    <MapMarker key={place._id} anchor={[place.location.latitude, place.location.longitude]} payload={place} onClick={() => this.onSelect(place)}/> 
  ))  

  // put this in a function  
  const selectedPlace = this.state.selectedPlace 
    ? (<Place data={this.state.selectedPlace}/>) 
    : null

    return (
      
        <div>
          <div style={ShowPlacesStyle}>
            <WebMap onClick={this.onRequestAdd}>{markers}</WebMap>
            {selectedPlace}
          </div>  
          <div>
            {this.state.isAddingPlace ? this.renderAddPlace() : null}
          </div>
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