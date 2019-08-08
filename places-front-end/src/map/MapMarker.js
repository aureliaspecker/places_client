import React from 'react';
import PropTypes from 'prop-types';
import { IoMdPin }from 'react-icons/io';
import { Box } from 'gestalt';
import 'gestalt/dist/gestalt.css'

class MapMarker extends React.Component {

    eventParameters = (event) => ({
        event,
        anchor: this.props.anchor,
        payload: this.props.payload
      })
   
    onClick = (event) => {
        event.nativeEvent.stopPropagation()     //This doesn't work — figure out how to make it work (likely React states)
        this.props.onClick(this.eventParameters(event))
    }
   
    render() {
        const {left, top, payload} = this.props

        const style = {
            position: 'absolute',
            transform: `translate(${left - 12}px, ${top - 12}px)`,
            cursor: 'pointer'
        }

        return (
            <div style={style} onClick={this.onClick}>
                <Box>
                    <IoMdPin />
                    <span>{payload.isSelected ? payload.name : ""}</span>
                </Box>
            </div>
        )
    }

}

MapMarker.propTypes = {
     // input, passed to events
     anchor: PropTypes.array.isRequired,
     payload: PropTypes.any,
 
     // optional modifiers
     hover: PropTypes.bool,
 
     // callbacks
     onClick: PropTypes.func,
     onContextMenu: PropTypes.func,
     onMouseOver: PropTypes.func,
     onMouseOut: PropTypes.func,
 
     // pigeon variables
     left: PropTypes.number,
     top: PropTypes.number,
 
     // pigeon functions
     latLngToPixel: PropTypes.func,
     pixelToLatLng: PropTypes.func
}

export default MapMarker;