import { MapContainer, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css";
import React from 'react';

import '../styles/map.css'

function Map() {
    return (
        <div>
        <MapContainer center={[36.9905, -122.0584]} zoom={15}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap/org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
    
        </MapContainer>
        </div>
    );
}

export default Map;