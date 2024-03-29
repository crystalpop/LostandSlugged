import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMapEvent} from "react-leaflet";
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
import { Add_items } from "../database/Add_items.js";
let lat = 36.9905;
let lng = -122.058;


let clickedAddItem = 0;
let position_check_lat = 0;
let position_check_lng = 0;
const customIcon = new Icon({
    iconUrl: require("../styles/pin_icon.png"),
    iconSize: [25, 38]
});

const customBigIcon = new Icon({
  iconUrl: require("../styles/pin_icon.png"),
  iconSize: [35, 48]
});

function LocationMarker() {
    const [position, setPosition] = useState(null)

    const map = useMapEvents({
        click(e) {
            setPosition([e.latlng.lat, e.latlng.lng]);
            position_check_lat = e.latlng.lat;
            position_check_lng = e.latlng.lng;
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

// const data = [
//   {
//     latitude: 36,
//     longitude: 122
//   },
//   {
//   latitude: 35,
//   longitude: 122
//   }
// ]
function Map() {
    const numCards = 10;
    const navigate = useNavigate();
    // const data = Get_items();
    const [data, setData] = useState([]);
    let [alert, changeAlert] = useState("");
    let [show, setShow] = useState(false);

    // Add Item Form Elements
    let submitted_name;
    let submitted_date;
    let submitted_email;
    let submitted_description;
    let [item_name, setItemName] = useState(submitted_name);
    let [item_date, setItemDate] = useState(submitted_date);
    let [item_description, setItemDescription] = useState(submitted_description);
    let [item_email, setItemEmail] = useState(submitted_email);

    // Shows the screen to input the item information
    let [showAddItemsModal, setShowAddItemsModal] = useState(false);
    const handleClose = () => setShowAddItemsModal(false);
    const handleShow = () => setShowAddItemsModal(true);

    // gets data from database
    useEffect(() => {
      const fetchData = async () => {
        const result = await Get_items();
        setData(result);
      };
      fetchData();
    }, []);

    let cards = [];  
    //console.log(data.length)

    // pushing everythjing from the database to the cards array, by looping through the data array
    for (let i=0; i < data.length; i++) {
        let description = data[i]["description"];
        let email = data[i]["email"];
        let item_name = data[i]["item_name"];
        let item_date = data[i]["date_lost"];
        let longitude = data[i]["longitude"];
        let latitude = data[i]["latitude"];
        let item_info = [description, email, item_name, item_date, latitude, longitude]
        
        cards.push(<GenCards item_info={item_info} />)
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


    const handleSubmit = (event) => {
      console.log(item_name);
      console.log(item_description);
      console.log(item_email);
      console.log(position_check_lat);
      console.log(position_check_lng);
      console.log(item_date);
      // Add_items(date_lost, description, email, item_name, latitude, longitude)
      Add_items(item_date, item_description, item_email, item_name, position_check_lat, position_check_lng);
      window.location.reload();

      // async Add_items(item_date, item_description, item_email, item_name = item_name, latitude=position_check_lat, longitude=position_check_lng)
      event.preventDefault();
      
  }

  
  

    return (
        <div className='map-container'>
        <MapContainer center={[lat, lng]} zoom={15}>

           <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap/org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"

          />


          
          {data.map(marker => (
            <Marker position={[marker.latitude, marker.longitude]} icon={customIcon}>
              <Popup> {marker.item_name} </Popup>
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
                <form onSubmit={handleSubmit}>
                <Modal.Body>
                  <p>Name:</p>
                <input type="text" value = {submitted_name} class="form-control" onChange={e => setItemName(e.target.value)}>
                    </input>
                    <br></br>
                    <p>Date Found:</p>
                <input type="text" value = {submitted_date} class="form-control" onChange={e => setItemDate(e.target.value)}>
                    </input>
                    <br></br>
                    <p>Description:</p>
                    <input type="text" value ={submitted_description} class="form-control" onChange={e => setItemDescription(e.target.value)}>
                    </input>
                    <br></br>
                    <p>Email:</p>
                    <input type="text" value ={submitted_email} class="form-control" placeholder="Enter your email to be contacted if lost/found." onChange={e => setItemEmail(e.target.value)}>
                    </input>
                    <br></br>
                </Modal.Body>
                <Modal.Footer>
                <Button type="submit" variant="secondary" onClick={handleSubmit}>
                        Submit
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
                </form>
                </Modal>

          </div>

    );
}

export default Map;