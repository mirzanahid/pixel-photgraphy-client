import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'

const Error = () => {
    return (
        <div className='error-page'>
            <div className="overlay">
                <div className="error-inner text-center">
                    <h3 className='text-404'>404</h3>
                    <h4 className='error-title'>Page Not Found</h4>
                    <p className='error-paragraph'>The page you are looking for does not exist. Please go to home. </p>
                    <Link to={'/'} className='white-button'>Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default Error;