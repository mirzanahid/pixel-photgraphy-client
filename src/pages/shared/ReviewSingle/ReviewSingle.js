import React from 'react';
import './ReviewSingle.css'

const ReviewSingle = () => {
    return (
        <div>
            <div className="review">
                <div className="profile">
                    <img className='profile-image' src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div className="review-text">
                    <div className="review-text-header">
                        <div className="name">
                            <h3>Nahid</h3>
                        </div>
                        <div className="date">
                            <p className='review-date'>Posted On: <span>2</span></p>
                        </div>
                    </div>
                    <div className="review-details">
                        <p className='review-pra'>He is a best photographer. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewSingle;