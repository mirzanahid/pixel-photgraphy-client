import React, { useState } from 'react';
import './ReviewSingle.css';
import { FaTrash, FaEdit } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FloatingLabel, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

const ReviewSingle = ({ review, condition, setReviews, reviews }) => {
    const { reviewer_name, review_image, user_review, post_date, title, _id } = review
    const [show, setShow] = useState(false);
    const handlerForDeleteReview = (e) => {

        e.preventDefault();
        const sure = window.confirm('Are you sure you want to delete this review')
        if (sure) {
            fetch(`https://pixel-photography-server.vercel.app/reviews/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    toast.success('Review Delete Successfully', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    const remainingReviews = reviews.filter(rev => rev._id !== _id)
                    setReviews(remainingReviews)
                })
        }

    }
    // review edit modal code 
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handlerForEditReview = (e, id) => {

        e.preventDefault();
        const form = e.target;
        const updateReviewValue = form.updateReview.value;
        const updateReview ={
            user_review: updateReviewValue
        }
        fetch(`https://pixel-photography-server.vercel.app/updatereviews/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(updateReview)
        })

            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    }



    // setReviews((oldData) => [...oldData, review]);
    // if (data.acknowledged) {
    //     alert('Review added successfully')

    //     form.reset();
    // }








    return (
        <div>
            <div className="review">
                <div className="profile">
                    <img className='profile-image' src={review_image} alt="" />
                    <div className="review-text-header">
                        <div className="name">
                            <h3>{reviewer_name}</h3>
                        </div>
                        <div className="date">
                            <p className='review-date'>Posted On: <span>{post_date.slice(0, 10)}</span></p>
                        </div>
                    </div>
                </div>
                <div className="review-text">
                    <div className="review-details">
                        <p className='review-pra'>{user_review}</p>
                        {
                            condition ?
                                <>
                                    <p className='review-details-service-name'>Service Name: {title}</p>
                                    <div className="reviewSingle-btns">
                                        <button onClick={handleShow} className='edite-delte-btn'><FaEdit /></button>
                                        <button onClick={handlerForDeleteReview} className='edite-delte-btn'><FaTrash /></button>
                                    </div>
                                </>
                                : null
                        }
                    </div>
                </div>
            </div>
            <div className="divider2"></div>
            <Modal className='custom' show={show} onHide={handleClose}>
                <form onSubmit={(e) => handlerForEditReview(e, _id)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Review</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FloatingLabel controlId="floatingTextarea2" label="Update your Review">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                className='add-review-text'
                                name="updateReview"
                            />
                        </FloatingLabel>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type='submit'>
                            Update
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    );
};

export default ReviewSingle;