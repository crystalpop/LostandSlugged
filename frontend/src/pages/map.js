import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet"
import "leaflet/dist/leaflet.css";
import React from 'react';
import { Icon } from "leaflet";
// import MarkerClusterGroup from "react-leaflet-cluster";
import { useState } from "react";

import '../styles/map.css'



const customIcon = new Icon({
    iconUrl: require("../styles/pin_icon.png"),
    iconSize: [25, 38]
});

function LocationMarker() {
    const [position, setPosition] = useState(null)

    const map = useMapEvents({
        click(e) {

            setPosition([e.latlng.lat, e.latlng.lng]);

        },

    });


    return (
        position ?
        <Marker position={position} icon={customIcon}>
            <Popup> ADD POPUP</Popup>
        </Marker>
        : null
    );

}


function Map() {

    return (
        <div>
        <MapContainer center={[36.9905, -122.0584]} zoom={15}>

           <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap/org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <LocationMarker />
    
        </MapContainer>
        </div>
    );
}

export default Map;