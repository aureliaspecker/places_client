import React from 'react';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import Overlay from 'pigeon-overlay';

export default function WebMap (props) {

  const markers = props.places.map(place => (
    <Marker anchor={[place.location.latitude, place.location.longitude]} payload={place} onClick={() => props.onSelect(place)}/> 
  ))



  return (  
  
  <Map center={[51.510715, -0.136563]} zoom={12} width={600} height={400}>
    {markers}
  </Map>
)

}