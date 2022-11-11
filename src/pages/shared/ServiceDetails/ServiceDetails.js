import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import './ServiceDetails.css';
import { FaStar } from "react-icons/fa";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ReviewSingle from '../ReviewSingle/ReviewSingle';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import { toast } from 'react-toastify';


const ServiceDetails = () => {
    useTitle('Service Details')
    const { user } = useContext(AuthContext);
    const Services = useLoaderData()
    const { title, thumbnail_url, ratings, price, description, _id } = Services
    const [reviews, setReviews] = useState([])
    const [reviewLogin, setReviewLogin] = useState(false)
    const [emptyReview, setEmptyReview] = useState(false)
    const location = useLocation();

    const handlerForReviewAdd = (e) => {
        e.preventDefault();
        const form = e.target;
        const reviewValue = form.review.value;

        const review = {
            review_image: user?.photoURL,
            reviewer_name: user?.displayName,
            email: user?.email,
            user_review: reviewValue,
            title: title,
            post_date: `${new Date()}`,
            service_id: _id
        }

        if (user?.email) {
            if (reviewValue === '') {
                setEmptyReview(true)
            }
            else {
                fetch('https://pixel-photography-server.vercel.app/review', {
                    method: 'POST',
                    headers: {
                        'content-type': "application/json"
                    },
                    body: JSON.stringify(review)
                })
                    .then(res => res.json())
                    .then(data => {
                        setReviews((oldData) => [...oldData, review]);
                        if (data.acknowledged) {
                            toast.success('Review added successfully', {
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
                setEmptyReview(false)
            }
        }
        else {
            setReviewLogin(true)
        }
    }

    useEffect(() => {
        fetch(`https://pixel-photography-server.vercel.app/reviews/${_id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [_id])

    return (
        <div>
            <div className="page-header">
                <h3 className='page-header-title'>Service Details</h3>
                <Breadcrumb className='bread'>
                    <li className='breadcrumb-item'>
                        <Link to={'/'}>Home</Link></li>
                    <li className='breadcrumb-item' >
                        <Link to={'/allServices'}>All Services</Link>
                    </li>
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
                                        reviews.map((review, idk) => <ReviewSingle key={idk} review={review} condition={false}></ReviewSingle>)
                                        :
                                        <p className='empty-message'>no data to show</p>
                                }
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center'>
                    <Col lg='8'>
                        <div className="add-review custom">
                            <form onSubmit={handlerForReviewAdd} className='border-0 add-review-form'>
                                <FloatingLabel controlId="floatingTextarea2" label="Add your Review">
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        className='add-review-text'
                                        name="review"
                                    />
                                </FloatingLabel>
                                {
                                    reviewLogin ?
                                        <p className='error-text details-error'>Please Login to add review <Link state={{ from: location }} replace to={'/login'}>Login</Link> </p>
                                        :
                                        null
                                }
                                {
                                    emptyReview ?
                                        <p className='error-text details-error'>Please write something in the review box </p>
                                        :
                                        null
                                }
                                <button className='primary-button add-review-btn' type="submit">
                                    Add Review
                                </button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default ServiceDetails;