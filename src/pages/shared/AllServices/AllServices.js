import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SingleService from '../SignleService/SingleService';

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