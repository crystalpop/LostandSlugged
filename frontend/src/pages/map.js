import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet"
import "leaflet/dist/leaflet.css";
import React from 'react';
import Get_items from '../Add_Items/card_info.js'
import { Icon } from "leaflet";
// import MarkerClusterGroup from "react-leaflet-cluster";
import '../styles/map.css'
import {NavLink, useNavigate} from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// Import Swiper React components
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


const customIcon = new Icon({
    iconUrl: require("../styles/pin_icon.png"),
    iconSize: [25, 38]
});

function LocationMarker() {
    const [position, setPosition] = useState(null)

    const map = useMapEvents({
        click(e) {

            setPosition([e.latlng.lat, e.latlng.lng]);
            // write this position to database

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




function genCards() {
   //TODO
  return (
      <Element name="scroll-container-first-element" style={{
          marginBottom: '2%'
        }}><Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </Element>
  )
}
const data = [
  {
    latitude: 36,
    longitude: 122
  },
  {
  latitude: 35,
  longitude: 122
  }
]
function Map() {
    const numCards = 10;
    const navigate = useNavigate();
    // const data = Get_items();
    const [data, setData] = useState([]);

    let [alert, changeAlert] = useState("");

    useEffect(() => {
      const fetchData = async () => {
        const result = await Get_items();
        setData(result);
      };
      fetchData();
    }, []);

  //   const data = Get_items().then(
  //     (onResolved) => {
  //         return
  //     },
  //     (onRejected) => {
  //         // Some task on failure
  //     }
  // )

    let cards = [];
    
    for (let i=0; i < numCards; i++) {
        cards.push(genCards());
    }

    return (
        <div className='map-container'>
        <MapContainer center={[36.9905, -122.0584]} zoom={15}>

           <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap/org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"

          />


          
          {data.map(marker => (
            <Marker position={[marker.latitude, marker.longitude]} icon={customIcon}>
              <Popup> ADD POPUP</Popup>
            </Marker>
          ))}

          <LocationMarker />
    

        </MapContainer>
        <div className='buttons'>
        {alert}
        <button className='logout' onClick={()=> navigate('../')}>Logout</button>
        <button className='add-item' onClick={()=> changeAlert('Click on the map!')}>+ Item</button>
        <Element className="element" id="scroll-container" style={{
            // position: 'relative',
            marginTop:'3%',
            overflow: 'scroll',
            marginBottom: '2%'
          }}>
            {cards}
          </Element>
        </div>
        </div>
        
    );
}

export default Map;