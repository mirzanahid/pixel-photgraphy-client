import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { PhotoProvider } from 'react-photo-view';
import { Link } from 'react-router-dom';
import SingleService from '../SignleService/SingleService';
import './services.css'

const Services = () => {
    return (
        <div className='service-section'>
            <Container>
                <div className="title text-center">
                    <h2 className='section-title'>My Services</h2>
                </div>
                <Row>
                    <Col lg='4'>
                        <PhotoProvider>
                            <SingleService></SingleService>
                        </PhotoProvider>

                    </Col>
                </Row>
                <div className="service-footer text-center">
                    <Link to={'/allServices'} className='primary-button'>See More</Link>
                </div>
            </Container>
        </div>
    );
};

export default Services;