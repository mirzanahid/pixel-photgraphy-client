import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddService = () => {
    return (
        <div>
            <div className="page-header">
                <h3 className='page-header-title'>Add Services</h3>
            </div>
            <div className="page-inner">
                <Container>
                    <Row className='d-flex justify-content-center'>
                        <Col lg="6">
                            <Form>
                            <h2 className='form-heading'>Add Service</h2>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" placeholder="Service Title" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control type="text" placeholder="Image Url" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="text" placeholder="Service Description" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Rating</Form.Label>
                                    <Form.Control type="text" placeholder="Service Rating" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control type="text" placeholder="Service Price" />
                                </Form.Group>
                                <button className='form-btn ' type="submit">
                                    Add Service
                                </button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    );
};

export default AddService;