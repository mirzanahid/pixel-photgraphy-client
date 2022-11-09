import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import './ServiceDetails.css';
import { FaStar } from "react-icons/fa";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ReviewSingle from '../ReviewSingle/ReviewSingle';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const { displayName, photoURL, email } = user;
    const Services = useLoaderData()
    const { title, thumbnail_url, ratings, price, description ,_id } = Services
    const [reviews, setReviews] = useState([])


    const handlerForReviewAdd = (e) => {
        e.preventDefault();
        const form = e.target;
        const reviewValue = form.review.value;
        const date = new Date().toDateString();


        const review = {
            review_image: photoURL,
            reviewer_name: displayName,
            email: email,
            user_review: reviewValue,
            post_date : date,
            service_id : _id


        }
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review added successfully')
                    form.reset();
                }
            })
            .catch(error => console.error(error));

    }

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [_id])


    return (
        <div>
            <div className="page-header">
                <h3 className='page-header-title'>Service Details</h3>
                <Breadcrumb className='bread'>
                    <div className='breadcrumb-item'><Link to={'/'}>Home</Link></div>
                    <div className='breadcrumb-item' >
                        <Link to={'/allServices'}>All Services</Link>
                    </div>
                    <Breadcrumb.Item active>Service Details</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <Container>

                <Row className='d-flex justify-content-center'>
                    <Col lg='8'>
                        <div className="service-details">
                            <div className="service-details-image">
                                <img className='service-de-image' src={thumbnail_url} alt="" />
                            </div>
                            <div className="service-de-inner">
                                <div className="service-de-header">
                                    <h3 className='service-de-title'>{title}</h3>
                                    <p className='service-de-ratings'>Rating: {ratings} <FaStar /></p>
                                </div>
                                <p className='service-d-pra'>{description}</p>
                                <p className='service-de-price'>Price: {price}</p>
                            </div>
                        </div>
                        <div className="divider"></div>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center'>
                    <Col lg='8'>
                        <div className="service_reviews">
                            <h3 className='service-details-review-heading'>Service Reviews</h3>
                            <div className="service-details-reviews">

                                {
                                    reviews.length !== 0 ?

                                        reviews.map(review => <ReviewSingle key={review._id} review={review} condition={false}></ReviewSingle>)
                                        :

                                        <p className='empty-message'>no data to show</p>
                                }

                            </div>
                        </div>

                    </Col>
                </Row>
                <Row className='d-flex justify-content-center'>
                    <Col lg='8'>
                        <div className="add-review">
                            <form onSubmit={handlerForReviewAdd} className='border-0 add-review-form'>
                                <FloatingLabel controlId="floatingTextarea2" label="Add your Review">
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        className='add-review-text'
                                        name="review"
                                    />
                                </FloatingLabel>
                                <button className='primary-button add-review-btn' type="submit">
                                    Add Review
                                </button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default ServiceDetails;