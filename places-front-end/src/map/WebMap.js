import React from 'react';
import Map from 'pigeon-maps';
import { Box, Card } from 'gestalt';
import 'gestalt/dist/gestalt.css';

const WebMap = props => (  
    <Box maxWidth={props.maxWidth} padding={2} column={12}>
        <Card>
          <Map 
          onClick={props.onClick}
          center={props.center} 
          defaultZoom={props.defaultZoom} 
          width={props.width} 
          height={props.height} 
          metaWheelZoom={true} 
          mouseEvents={true} 
          touchEvents={true}> 
            {props.children}
          </Map>
        </Card>
      </Box>
)

WebMap.defaultProps = {
  maxWidth: 650,
  center: [51.510715, -0.136563],
  defaultZoom: 14,
  width: 600,
  height: 400
}

export default WebMap;