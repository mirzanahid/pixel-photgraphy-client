import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Gallery.css';
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Gallery = () => {
    return (
        <div className='mb-5'>
            <Container>
                <div className="title text-center mt-5 mb-5">
                    <h2 className='section-title'>My Gallery</h2>
                </div>
                <Row>
                    <Col lg='4' md='4'>
                        <div className="insta-gallery">
                            <img className='gallery-image' src="https://media.istockphoto.com/id/1399000045/photo/wedding-guests-clapping-hands-as-the-newlywed-couple-walk-down-the-aisle-joyful-bride-and.jpg?s=612x612&w=0&k=20&c=KQLABtP9v0zSmT_pqIqhdRlG-nWIEOUoGFofIxgjlqI=" alt="" />
                            <div className="overlay">
                                <Link> <FaInstagramSquare /></Link>

                            </div>
                        </div>
                    </Col>
                    <Col lg='4' md='4'>
                        <div className="insta-gallery">
                            <img className='gallery-image' src="https://images.unsplash.com/photo-1481653125770-b78c206c59d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHdlZGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                            <div className="overlay">
                                <Link> <FaInstagramSquare /></Link>

                            </div>
                        </div>
                    </Col>
                    <Col lg='4' md='4'>
                        <div className="insta-gallery">
                            <img className='gallery-image' src="https://cdn.pixabay.com/photo/2014/09/13/04/59/couple-443600__340.jpg" alt="" />
                            <div className="overlay">
                                <Link> <FaInstagramSquare /></Link>

                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='mt-4'>
                    <Col lg='4' md='4'>
                        <div className="insta-gallery">
                            <img className='gallery-image' src="https://cdn.pixabay.com/photo/2016/03/14/14/21/bride-1255520__340.jpg" alt="" />
                            <div className="overlay">
                                <Link> <FaInstagramSquare /></Link>

                            </div>
                        </div>
                    </Col>
                    <Col lg='4' md='4'>
                        <div className="insta-gallery">
                            <img className='gallery-image' src="https://cdn.pixabay.com/photo/2015/04/16/11/01/wedding-725432__340.jpg" alt="" />
                            <div className="overlay">
                                <Link> <FaInstagramSquare /></Link>

                            </div>
                        </div>
                    </Col>
                    <Col lg='4' md='4'>
                        <div className="insta-gallery">
                            <img className='gallery-image' src="https://cdn.pixabay.com/photo/2018/01/05/08/19/beautiful-3062365__340.jpg" alt="" />
                            <div className="overlay">
                                <Link> <FaInstagramSquare /></Link>

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Gallery;