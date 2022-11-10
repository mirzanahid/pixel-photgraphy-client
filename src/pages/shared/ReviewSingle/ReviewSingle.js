import React from 'react';
import './ReviewSingle.css';
import { FaTrash, FaEdit } from "react-icons/fa";

const ReviewSingle = ({ review, condition }) => {
    const { reviewer_name, review_image, user_review, post_date, title } = review


    const handlerForEditReview = (e) => {
        e.preventDefault()
    }
    // const handlerForDeleteReview=(e)>{

    // }


    return (
        <div>
            <div className="review">
                <div className="profile">
                    <img className='profile-image' src={review_image} alt="" />
                </div>
                <div className="review-text">
                    <div className="review-text-header">
                        <div className="name">
                            <h3>{reviewer_name}</h3>
                        </div>
                        <div className="date">
                            <p className='review-date'>Posted On: <span>{post_date}</span></p>
                        </div>
                    </div>
                    <div className="review-details">
                        <p className='review-pra'>{user_review}</p>
                        <p className='review-details-service-name'>Service Name: {title}</p>
                        {
                            condition ?
                                <>
                                    <button onClick={handlerForEditReview} className='edite-delte-btn'><FaEdit /></button>
                                    <button className='edite-delte-btn'><FaTrash /></button>
                                </>
                                : null
                        }
                    </div>

                </div>

            </div>
            <div className="divider2"></div>
        </div>
    );
};

export default ReviewSingle;