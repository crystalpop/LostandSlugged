// add all the needed imports
import React, { useState } from 'react';
import {Card, Button, Modal} from 'react-bootstrap';
import { Element } from 'react-scroll';

import 'firebase/firestore';
import 'firebase/auth';




export default function GenCards({item_info}) {
    const [show,setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(item_info)
    if (item_info == null) {
        return null;
    }
    const [description, email, name] = item_info;
    // let description = item_info.description;
    // let email = item_info.email;
    // let name = item_info.item_name;
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
                dialogClassName="modal-100w"
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {description}
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