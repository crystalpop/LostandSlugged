import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet"
import "leaflet/dist/leaflet.css";
import React from 'react';
import Get_items from '../Add_Items/card_info.js'
import { Icon } from "leaflet";
// import MarkerClusterGroup from "react-leaflet-cluster";
import '../styles/map.css'
import {NavLink, useNavigate} from 'react-router-dom';
import { useRef, useState } from 'react';
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




function GenCards() {
    const [show,setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let email = 'transophia4@gmail.com';
    let name = 'airpods'
    return (
        <Element name="scroll-container-first-element" style={{
            marginBottom: '2%'
          }}><Card style={{ width: '100%', fontFamily:'Koulen', backgroundColor:'#E3E0E0', borderBlockColor:'white'}}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary" onClick={handleShow}>
            See More
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    hehehaha
                </Modal.Body>
                <Modal.Footer>
                    <a className="btn btn-danger" href ={"mailto: "+email}>Contact</a>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
                </Modal>
          </Card.Body>
        </Card>
        </Element>

    )
}
function Map() {
    const numCards = 10;
    const navigate = useNavigate();
    let cards = [];
    let [alert, changeAlert] = useState("");
    for (let i=0; i < numCards; i++) {
        cards.push(GenCards());
    }


    return (
        <div className='map-container'>
        <MapContainer center={[36.9905, -122.0584]} zoom={15}>

           <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap/org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"

          />

          <LocationMarker />
    

        </MapContainer>
        <div className='buttons'>
            <p className='alert'>
                {alert}
                </p>
        <button className='logout' onClick={()=> navigate('../')}>Logout</button>
        <button className='add-item' onClick={()=> changeAlert('Click on the map!') + (clickedAddItem = 1)}>+ Item</button>
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