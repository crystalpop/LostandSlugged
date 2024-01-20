import { MapContainer, TileLayer, Marker } from "react-leaflet"
import "leaflet/dist/leaflet.css";
import React from 'react';
import { Icon } from "leaflet";

import '../styles/map.css'

function Map() {

    const markers = [
        {
            geocode: [36.9905, -122.0584],
            popUp: "Test marker 1"
        }
    ];

    const customIcon = new Icon({
        iconUrl: require("../styles/pin_icon.png"),
        iconSize: [25, 38]
    })

    return (
        <div>
        <MapContainer center={[36.9905, -122.0584]} zoom={15}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap/org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

           {markers.map(marker => (
            <Marker position={marker.geocode} icon={customIcon}></Marker>
           ))}
    
        </MapContainer>
        </div>
    );
}

export default Map;