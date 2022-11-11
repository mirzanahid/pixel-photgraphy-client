import React, { useContext, useEffect, useState } from 'react';
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewSingle from '../shared/ReviewSingle/ReviewSingle';

const MyReviews = () => {
    const { user, logout } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`https://pixel-photography-server.vercel.app/private_reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logout()
                }
                return res.json()
            })
            .then(data => {
                setReviews(data)
            })
    }, [user?.email])

    useTitle('My Reviews')
    return (
        <div>
            <div className="page-header">
                <h3 className='page-header-title'>My All Reviews</h3>
                <Breadcrumb className='bread'>
                    <li className='breadcrumb-item'>
                        <Link to={'/'}>Home</Link></li>
                    <Breadcrumb.Item active>My Reviews</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="page-inner">
                <Container>
                    <Row className='d-flex justify-content-center'>
                        <Col lg='6'>
                            {
                                reviews.length !== 0 ?
                                    reviews.map(review => <ReviewSingle key={review._id} review={review} setReviews={setReviews} reviews={reviews} condition={true}></ReviewSingle>)
                                    :
                                    <p className='empty-message'>No reviews were added</p>
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default MyReviews;