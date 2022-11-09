import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SingleService from '../SignleService/SingleService';

const AllServices = () => {
    return (
        <div>
            <div className="page-header">
                <h3 className='page-header-title'>All Services</h3>
            </div>
            <div className="page-inner">
                <Container>
                    <Row>
                        <Col lg='4'>
                            <SingleService></SingleService>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default AllServices;