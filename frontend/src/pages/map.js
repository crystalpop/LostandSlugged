import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet"
import "leaflet/dist/leaflet.css";
import React from 'react';
import Get_items from '../Add_Items/card_info.js'
import { Icon } from "leaflet";
// import MarkerClusterGroup from "react-leaflet-cluster";
import '../styles/map.css'
import {NavLink, useNavigate} from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import GenCards from './generate_cards.js';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// Import Swiper React components
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
let clickedAddItem = 0;
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
        position && clickedAddItem?
        <Marker position={position} icon={customIcon}>
        </Marker>
        : null
    );

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
    let [show, setShow] = useState(false);

    // Add Item Form Elements
    let item_name;
    let item_description;
    let item_email;
    // need to get current date
    // crystal do coordinates

    // Shows the screen to input the item information
    let [showAddItemsModal, setShowAddItemsModal] = useState(false);
    const handleClose = () => setShowAddItemsModal(false);
    const handleShow = () => setShowAddItemsModal(true);

    useEffect(() => {
      const fetchData = async () => {
        const result = await Get_items();
        setData(result);
      };
      fetchData();
    }, []);

    let cards = [];


    
    for (let i=0; i < numCards; i++) {
        cards.push(GenCards());
    }
    function handleAddItems(){
        setShow(true);
        changeAlert("Click on the map!");
        clickedAddItem = 1;
    }
    function handleConfirmAddItems(){
      setShow(false);
      changeAlert("");
      clickedAddItem = 0;
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
            <p className='alert'>
                {alert}
                </p>
        <button className='logout' onClick={()=> navigate('../')}>Logout</button>
        <button className='add-item' onClick={()=> handleAddItems()}>+ Item</button>
        <button className='confirm' onClick={()=> handleConfirmAddItems() + setShowAddItemsModal(true)} 
        disabled = {!show} >{show ? "CONFIRM" :  "Click above :)"}</button>

        <Element className="element" id="scroll-container" style={{
            // position: 'relative',
            marginTop:'3%',
            overflow: 'scroll',
            marginBottom: '2%'
          }}>
            {cards}
          </Element>
          </div>

          <Modal
                show={showAddItemsModal}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                dialogClassName="modal-100w"
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add An Item!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form onSubmit={console.log('hi')}>
                  <p>Name:</p>
                <input type="text" value ={item_name} class="form-control">
                    </input>
                    <br></br>
                    <p>Description:</p>
                    <input type="text" value ={item_description} class="form-control">
                    </input>
                    <br></br>
                    <p>Email:</p>
                    <input type="text" value ={item_email} class="form-control" placeholder="Enter your email to be contacted if lost/found.">
                    </input>
                    <button type="submit">Submit form</button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
                </Modal>

          </div>

    );
}

export default Map;