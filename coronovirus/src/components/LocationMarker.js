import React from "react";
import { Marker } from "react-simple-maps";

// center = {[position.lat, position.long]}
function LocationMarker (props) {
   // const {zoomIn} = props;

    return (
            <Marker coordinates={[props.long, props.lat]}>
                <circle r={2} fill="#F53"/>
            </Marker>    
    )
}

export default LocationMarker;