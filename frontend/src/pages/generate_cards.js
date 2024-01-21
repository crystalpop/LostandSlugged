// add all the needed imports
import React, { useState } from 'react';
import {Card, Button, Modal} from 'react-bootstrap';
import { Element } from 'react-scroll';

import 'firebase/firestore';
import 'firebase/auth';




export default function GenCards() {
    const [show,setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let description = "Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae undecommodi aspernatur enim, consectetur. Cumque deleniti temporibus ipsam atque a dolores quisquam quisquam adipisci possimus laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia reiciendis porro quo magni incidunt dolore amet atque facilis ipsumdeleniti rem!";
    let email = 'transophia4@gmail.com';
    let name = 'airpods';
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