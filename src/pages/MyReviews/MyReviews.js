import React, { useContext, useEffect, useState } from 'react';
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthProvider from '../../contexts/AuthProvider/AuthProvider';
import ReviewSingle from '../shared/ReviewSingle/ReviewSingle';

const MyReviews = ({reviewer_email}) => {
    const {user} = useContext(AuthProvider);
    const [reviews, setReviews] = useState([])
       console.log(reviews)
    useEffect(() => {
        fetch(`http://localhost:5000/private_reviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    return (
        <div>
            <div className="page-header">
                <h3 className='page-header-title'>My All Reviews</h3>
                <Breadcrumb className='bread'>
                    <Breadcrumb.Item><Link to={'/'}>Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item active>My Reviews</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="page-inner">
                <Container>
                    <Row className='d-flex justify-content-center'>
                        <Col lg='6'>
                            {
                                reviews.length !== 0 ?
                                    reviews.map(review => <ReviewSingle key={review._id} review={review}></ReviewSingle>)
                                    :
                                    <p className='empty-message'>no data to show</p>
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default MyReviews;