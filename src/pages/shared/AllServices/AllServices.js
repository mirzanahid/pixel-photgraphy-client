import React, {  useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleService from '../SignleService/SingleService';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';


const AllServices = () => {
   
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://pixel-photography-server.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])
    return (
        <div>
            <div className="page-header">
                <h3 className='page-header-title'>All Services</h3>
                <Breadcrumb className='bread'>
                    <li className='breadcrumb-item'>
                        <Link to={'/'}>Home</Link></li>
                    <Breadcrumb.Item active>Add Services</Breadcrumb.Item>
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