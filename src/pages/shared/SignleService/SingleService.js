import React from 'react';
import { Col } from 'react-bootstrap';
import { FaStar } from "react-icons/fa";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import './SingleService.css'
const SingleService = ({ service }) => {
    const { title, thumbnail_url, ratings, price, description, _id } = service;
    return (
        <Col lg='4' md='4' className='mt-4'>
            <PhotoProvider>
                <div className='service'>
                    <PhotoView src={thumbnail_url}>
                        <div className="service-image-container">
                            <img className='service-image' src={thumbnail_url} alt="" />
                        </div>
                    </PhotoView>
                    <img src="/1-thumbnail.jpg" alt="" />

                    <div className="service-inner">
                        <h3 className='service-title'>{title}</h3>
                        <p className='service-pra'>{description?.length > 100 ? description.slice(0, 95) + '...' : description}</p>
                        <p className='ratings'>Ratings: <span>{ratings}</span> <FaStar /></p>
                        <p className='service-price'>$<span>{price}</span> hour</p>
                        <Link to={`/service_details/${_id}`} className='secondary-button service-btn'>View Details</Link>
                    </div>
                </div>
            </PhotoProvider>
        </Col>
    );
};

export default SingleService;