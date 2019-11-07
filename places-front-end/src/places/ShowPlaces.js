import React from 'react';
import PropTypes from 'prop-types';
import Place from './Place';
import {WebMap, MapMarker} from '../map';
import AddPlaceForm from './AddPlaceForm';
import { addPlace, getPlaces } from './placesApi';
import { Text } from 'gestalt';
import 'gestalt/dist/gestalt.css';

const ShowPlacesStyle = {
  display: 'flex', 
  flexDirection: 'row',
  padding: '5px',
  margin: '30px'
}
    

class ShowPlaces extends React.Component {

  state = {
    selectedPlace: undefined, 
    iAddingPlace:false, 
    center: [],
    zoom: undefined,
    places:[]
  };
  
  componentWillMount () {
    getPlaces().then(places => this.setState({places}))
  }

  onSelect = (selectedPlace) => {
    this.setState({selectedPlace: selectedPlace})
  }

  handleBoundsChanged = ({ center, zoom }) => {
    this.setState({ center, zoom })
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
        <AddPlaceForm addRequest={this.state.addRequest} onSubmitPlace={this.submitPlace}/>
    )
  }

  renderSelectedPlace() {
    const {selectedPlace} = this.state 
  
    return(
      selectedPlace ? (<Place data={selectedPlace}/>) 
    : null
    )
  }

  renderLongLat() {
    const {center} = this.state
    return (
      <Text>{center.map((coordinate, index) => {
        if (index === 0) {
          return `Longitude: ${coordinate} `;
        } else if (index === 1) {
          return `Latitude: ${coordinate}`;
        }
      })}</Text>
    )
  }

  renderZoom() {
    const {zoom} = this.state
    return zoom ? (
      <Text>{`Zoom: ${zoom}`}</Text>
    ) : null
  }

  render() {

    const markers = this.state.places.map(place => (
      <MapMarker key={place._id} anchor={[place.location.latitude, place.location.longitude]} payload={place} onClick={() => this.onSelect(place)}/> 
    ))  

      return (
          <React.Fragment>
            <div style={ShowPlacesStyle}>
              <WebMap onClick={this.onRequestAdd} onBoundsChanged={this.handleBoundsChanged}>{markers}</WebMap>
              {this.renderSelectedPlace()}
            </div>  
            <div>
              {this.renderLongLat()} 
              {this.renderZoom()}
            </div>
            {this.state.isAddingPlace ? this.renderAddPlace() : null}
          </React.Fragment>

      );
  }
}
  
  ShowPlaces.propTypes = {
    places: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string
    })).isRequired
  };
  
  export default ShowPlaces;