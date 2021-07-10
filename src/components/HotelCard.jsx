import React from 'react'
import { Card, Button, ListGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faParking, faHamburger, faSwimmingPool, faStar } from "@fortawesome/free-solid-svg-icons";

function HotelCard(props) {
    return (
        <div className="mt-3">
            <Card >
                <Card.Img variant="top" src={`https:source.unsplash.com/${props.imgPath}`} />
                <Card.Body className="text-center">
                    <Card.Title>{props.hotelName.toUpperCase()}</Card.Title>
                    <ListGroup variant="flush">
                        <ListGroup.Item>No of Rooms: {props.rooms} </ListGroup.Item>
                        <ListGroup.Item>Per Day Price: {props.price}</ListGroup.Item>
                        <ListGroup.Item>
                            <strong>SERVICES</strong>
                            <br />
                            {props.services.map((service, index) => {
                                return (
                                    <><span>{service.toUpperCase()}</span> <br /></>
                                )
                            })}
                        </ListGroup.Item>
                        <ListGroup.Item><span className="mx-2">RATING:</span>
                            {props.rating} <FontAwesomeIcon className="text-warning" icon={faStar} />
                        </ListGroup.Item>
                    </ListGroup>
                    <Button variant="success">BOOK NOW</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default HotelCard
