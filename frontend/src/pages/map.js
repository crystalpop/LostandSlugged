import { MapContainer, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css";
import React from 'react';
import '../styles/map.css'
import {NavLink, useNavigate} from 'react-router-dom';
import { useRef, useState } from 'react';
// Import Swiper React components
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function Map() {
    const navigate = useNavigate();
    return (
        <div className='map-container'>
        <MapContainer center={[36.9905, -122.0584]} zoom={15}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap/org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
    
        </MapContainer>
        <div className='buttons'>
        <button className='logout' onClick={()=> navigate('../')}>Logout</button>
        <button className='add-item' onClick={()=> navigate('../')}>+ Item</button>
        <Element className="element" id="scroll-container" style={{
            // position: 'relative',
            overflow: 'scroll',
            marginBottom: '2%'
          }}>

            <Element name="scroll-container-first-element" style={{
              marginBottom: '2000px'
            }}>
              first element inside container
          </Element>

            <Element name="scroll-container-second-element" style={{
              marginBottom: '200px'
            }}>
              second element inside container
          </Element>
          </Element>
        </div>
        </div>
        
    );
}

export default Map;