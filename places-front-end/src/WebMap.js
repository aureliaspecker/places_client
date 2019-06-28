import React from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import ol from 'openlayers';
import 'ol/ol.css';


function WebMap() {

    const webMap  = new ol.Map({
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([37.41, 8.82]),
        zoom: 4
      }),
      target: 'map' 
    })

  return(
    <div id="map" className="map" ref="olmap">
      {webMap}
    </div>
  )
}

export default WebMap;