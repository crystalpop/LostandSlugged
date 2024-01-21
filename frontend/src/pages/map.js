import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet"
import "leaflet/dist/leaflet.css";
import React from 'react';
import { Icon } from "leaflet";
// import MarkerClusterGroup from "react-leaflet-cluster";
import { useState } from "react";

import '../styles/map.css'



const places = [
    {
        geocode: [36.9905, -122.0584],
        popUp: "Item name"
    },
    {
        geocode: [36.98407, -122.061606],
        popUp: "Item name 2"
    }

];

const customIcon = new Icon({
    iconUrl: require("../styles/pin_icon.png"),
    iconSize: [25, 38]
});

function LocationMarker() {
    const [position, setPosition] = useState(null)

    const map = useMapEvents({
        click(e) {

            setPosition(e.latlng);
            places.push({geocode: [e.latlng.lat, e.latlng.lng], popUp: "Hello"});
            console.log(places); // instead of this write it to database
        },

    });

     // add position to an array called places

    return position === null ? null : (
        <Marker position={position} icon={customIcon}>
            <Popup> ADD POPUP</Popup>
        </Marker>
    );

}





function Map() {

    

    // const Markers = () => {
    //     const map = useMapEvents({
    //         click(e) {
    //             setSelectedPosition([
    //                 e.latlng.lat,
    //                 e.latlng.lng
    //             ]);
    //         },
    //     })

    //     return (
    //         selectedPosition ?
    //         <Marker key={selectedPosition[0]}
    //         position={selectedPosition}
    //         interactive={false}
    //         icon={customIcon} />
    //         : null
    //     );
    // };
        // {
        //     geocode: [36.9905, -122.0584],
        //     popUp: "Item name"
        // },
        // {
        //     geocode: [36.98407, -122.061606],
        //     popUp: "Item name 2"
        // }
    


    // });

    // const createCustomClusterIcon = (cluster) => {
    //     return new divIcon({
    //         html: '<div class="cluster-icon">$(cluster.getChildCount())</div>',
    //         className: "custom-marker-cluster",
    //         iconSize: point(33, 33, true)
    //     });
    // };

    return (
        <div>
        <MapContainer center={[36.9905, -122.0584]} zoom={15}>



           <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap/org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {places.map(marker => (
            <Marker position={marker.geocode} icon={customIcon}>
            <Popup> ADD POPUP</Popup>
            </Marker>
          ))}
          <LocationMarker />
    
        </MapContainer>
        </div>
    );
}

export default Map;