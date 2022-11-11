import React, { useState } from 'react';
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    useTitle('Add Service')
    const [error, setError] = useState()
    const handlerForAddService = (event) => {
        event.preventDefault()
        const form = event.target;
        const title = form.title.value;
        const image_url = form.image_url.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const description = form.description.value;
        const addService = {
            title: title,
            thumbnail_url: image_url,
            ratings: rating,
            price: price,
            description: description
        }

        if (!title && !image_url && !rating && !price && !description) {
            setError('This field can not be empty')
        }

        else {
            fetch('https://pixel-photography-server.vercel.app/addService', {
                method: 'POST',
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(addService)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast.success('Service added successfully', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                        form.reset();
                    }
                })
                .catch(error => console.error(error));
        }
    }
    return (
        <div>
            <div className="page-header">
                <h3 className='page-header-title'>Add Services</h3>
                <Breadcrumb className='bread'>
                    <li className='breadcrumb-item'>
                        <Link to={'/'}>Home</Link></li>
                    <li className='breadcrumb-item'>
                        <Link to={'/allServices'}>All Services</Link></li>
                    <Breadcrumb.Item active>Add Services</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="page-inner custom">
                <Container>
                    <Row className='d-flex justify-content-center'>
                        <Col lg="6">
                            <Form onSubmit={handlerForAddService}>
                                <h2 className='form-heading'>Add Service</h2>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" placeholder="Service Title" name="title" />
                                    <p className='error-text'>{error}</p>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword" >
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control type="text" placeholder="Image Url" name='image_url' />
                                    <p className='error-text'>{error}</p>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Rating</Form.Label>
                                    <Form.Control type="text" placeholder="Service Rating" name='rating' />
                                    <p className='error-text'>{error}</p>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control type="text" placeholder="Service Price" name='price' />
                                    <p className='error-text'>{error}</p>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Service Description"
                                        style={{ height: '100px' }}
                                        name='description'
                                    />

                                    <p className='error-text'>{error}</p>
                                </Form.Group>


                                <button className='form-btn ' type="submit">
                                    Add Service
                                </button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div >

        </div >
    );
};

export default AddService;