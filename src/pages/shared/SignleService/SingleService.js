import React from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './SingleService.css'
const SingleService = () => {
    return (
        <div className='service'>
            <div className="service-image-container">
                <img className='service-image' src="https://cdn.sweetescape.com/occasion_portfolios/138/processed_prewedding-5.jpg" alt="" />
            </div>
            <div className="service-inner">
                <h3 className='service-title'>Pre Wedding</h3>
                <p className='service-pra'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur beatae molestias voluptatibus. Beatae, perferendis quod.</p>
                <p className='ratings'>Ratings: <span>5</span> <FaStar /></p>
                <p className='service-price'>$<span>120</span> hour</p>
                <Link className='secondary-button service-btn'>View Details</Link>
            </div>
        </div>
    );
};

export default SingleService;