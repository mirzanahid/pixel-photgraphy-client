import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './ServiceDetails.css';
import { FaStar } from "react-icons/fa";

const ServiceDetails = () => {
    const Services = useLoaderData()
    const { title, thumbnail_url, ratings, price, description } = Services
    console.log(Services)
    return (
        <div>
            <div className="page-header">
                <h3 className='page-header-title'>Service Details</h3>
            </div>
            <Container>

                <Row className='d-flex justify-content-center'>
                    <Col lg='8'>
                        <div className="service-details">
                            <div className="service-details-image">
                                <img className='service-de-image' src={thumbnail_url} alt="" />
                            </div>
                            <div className="service-de-inner">
                                <div className="service-de-header">
                                    <h3 className='service-de-title'>{title}</h3>
                                    <p className='service-de-ratings'>Rating: {ratings} <FaStar /></p>
                                </div>
                                <p className='service-d-pra'>{description}</p>
                                <p className='service-de-price'>Price: {price}</p>
                            </div>
                        </div>
                        <div className="divider"></div>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center'>
                    <Col lg='8'>
                        <div className="service_reviews">
                            
                        </div>

                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default ServiceDetails;