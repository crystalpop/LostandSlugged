// add all the needed imports
import React, { useState } from 'react';
import {Card, Button, Modal} from 'react-bootstrap';
import { Element } from 'react-scroll';

import 'firebase/firestore';
import 'firebase/auth';

export let lati;
export let long;


export default function GenCards({item_info}) {
    const [show,setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClick = () => console.log('hi');
    // let [lat, setLat] = useState(36.9905);
    // let [lng, setLng] = useState(-122.058);
    // console.log(item_info)
    if (item_info == null) {
        return null;
    }
    const [description, email, name, date_lost, latitude, longitude] = item_info;

    
    // let description = item_info.description;
    // let email = item_info.email;
    // let name = item_info.item_name;
    return (
        <Element name="scroll-container-first-element" style={{
            marginBottom: '2%'
          }}><Card style={{ width: '98%', fontFamily:'Koulen', 
          backgroundColor:'#E3E0E0', borderBlockColor:'white'}} 
          className='bg-image hover-zoom'
          >

          <Card.Body className='w-100'>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
            <Button variant="primary" onClick={handleShow}>
            See More
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                dialogClassName="modal-100w"
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Date lost: {date_lost} <br />
                    Description: {description}
                </Modal.Body>
                <Modal.Footer>
                    <a className="btn btn-danger" href ={"mailto: "+ email}>Contact</a>
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