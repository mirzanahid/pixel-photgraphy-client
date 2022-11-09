import React from 'react';
import { Col, Container, FloatingLabel, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddService = () => {

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
            description :description
        }
       fetch('http://localhost:5000/addService',{
        method: 'POST',
        headers: {
            'content-type': "application/json"
        },
        body:JSON.stringify(addService)
       })
       .then(res=>res.json())
       .then(data =>{
        console.log(data)
        if(data.acknowledged){
            alert('Service added successfully')
            form.reset();
        }
       })
       .catch(error => console.error(error));


    }
    return (
        <div>
            <div className="page-header">
                <h3 className='page-header-title'>Add Services</h3>
            </div>
            <div className="page-inner">
                <Container>
                    <Row className='d-flex justify-content-center'>
                        <Col lg="6">
                            <Form onSubmit={handlerForAddService}>
                                <h2 className='form-heading'>Add Service</h2>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" placeholder="Service Title" name="title" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword" >
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control type="text" placeholder="Image Url" name='image_url' />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Rating</Form.Label>
                                    <Form.Control type="text" placeholder="Service Rating" name='rating' />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control type="text" placeholder="Service Price" name='price' />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        style={{ height: '100px' }}
                                        name='description'
                                    />
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