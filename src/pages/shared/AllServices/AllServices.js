import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SingleService from '../SignleService/SingleService';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';

const AllServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="page-header">
                <h3 className='page-header-title'>All Services</h3>
                <Breadcrumb className='bread'>
                    <Breadcrumb.Item><Link to={'/'}>Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item active>Service Details</Breadcrumb.Item>
                </Breadcrumb>

            </div>
            <div className="page-inner">
                <Container>
                    <Row>
                        {
                            services.map(service => <SingleService key={service._id} service={service}></SingleService>)
                        }
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default AllServices;