import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { PhotoProvider } from 'react-photo-view';
import { Link } from 'react-router-dom';
import SingleService from '../SignleService/SingleService';
import './services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/home_services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='service-section'>
            <Container>
                <div className="title text-center">
                    <h2 className='section-title'>My Services</h2>
                </div>
                <Row>
                        <PhotoProvider>
                            {
                                services.map(service =><SingleService key={service._id} service={service}></SingleService>)
                            }
                        </PhotoProvider>

                </Row>
                <div className="service-footer text-center">
                    <Link to={'/allServices'} className='primary-button'>See More</Link>
                </div>
            </Container>
        </div>
    );
};

export default Services;