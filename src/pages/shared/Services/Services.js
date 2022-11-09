import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
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
                 <SingleService></SingleService>
                </Col>
             </Row>
          <div className="service-footer text-center">
          <Link to={'/allService'} className='primary-button'>See More</Link>
          </div>
        </Container>
    </div>
    );
};

export default Services;