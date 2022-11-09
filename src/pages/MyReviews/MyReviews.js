import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReviewSingle from '../shared/ReviewSingle/ReviewSingle';

const MyReviews = () => {
    return (
        <div>
            <div className="page-header">
                <h3 className='page-header-title'>My All Reviews</h3>
            </div>
            <div className="page-inner">
                <Container>
                    <Row className='d-flex justify-content-center'>
                        <Col lg='6'>
                        <ReviewSingle></ReviewSingle>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default MyReviews;