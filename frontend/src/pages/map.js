import { MapContainer, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css";
import React from 'react';
import '../styles/map.css'
import {NavLink, useNavigate} from 'react-router-dom';
import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// Import Swiper React components
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
function genCards() {
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
function makeMessage() {
    return (
  <div class="alert alert-success alert-dismissible">
  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
  <strong>Success!</strong> Indicates a successful or positive action.
</div>)
}
function Map() {
    const numCards = 10;
    const navigate = useNavigate();
    let cards = [];
    let [alert, changeAlert] = useState("");
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