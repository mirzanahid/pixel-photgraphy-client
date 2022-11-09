import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import google from '../../../assets/google.png'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import './Signup.css';

const Signup = () => {
    const { createUser, updateUserProfile, user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [error, setError] = useState()
    const [emailError, setEmailError] = useState()
    const [passwordError, setPasswordError] = useState()

    useTitle('SignUp');
    //  login with email and password
    const signUpHandler = (e) => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const image = form.image.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;


        // form authentication 
        if (!name && !email && !password && !image) {
            setError('This field can not be empty')
        }
        if (user?.email === email) {
            setEmailError('Already had an account on this email')
        }
        if (password !== confirmPassword) {
            setPasswordError('Password and Confirm Password does not match')
            form.password.reset()
            return
        }


        // create new user using email and password
        createUser(email, password)
            .then(result => {
                navigate('/')
                handlerForUpdateNameAndPhoto(name, image)
                form.reset()

            })
            .catch(error => { console.error(error) })

    }
    // update image and photo

    const handlerForUpdateNameAndPhoto = (name, image) => {
        const profile = {
            displayName: name,
            photoURL: image
        }
        updateUserProfile(profile)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.error('error', error)
            })
    }



    return (
        <div className='signup'>
            <div className="overlay">
                <Container>
                    <Row>
                        <Col lg='6'>
                            <div className="signup-login-form">
                                <Form onSubmit={signUpHandler}>
                                    <h2 className='signup-heading'>Sign up</h2>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Full Name" name='name' />
                                        <p className='error-text'>{error}</p>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter Email" name='email' />
                                        <p className='error-text'>{error}</p>
                                        <p className='error-text'>{emailError}</p>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Image Url</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Image Url" name='image' />
                                        <p className='error-text'>{error}</p>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Enter Password" name='password' />
                                        <p className='error-text'>{error}</p>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control type="password" placeholder="Enter Password" name='confirmPassword' />
                                        <p className='error-text'>{passwordError}</p>
                                    </Form.Group>
                                    <Form.Group className="mb-3 check-input" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" />
                                        <Form.Label>I agree to the <Link>Terms of Service</Link> and <Link>Privacy Policy</Link></Form.Label>
                                    </Form.Group>
                                    <Button className='submit-btn' type="submit">
                                        Sign up
                                    </Button>
                                    <p className='or'>Or</p>
                                    <div className="button-group">
                                        <button className='social-signup'><img className='google-icon' src={google} alt="" /> Continue with Google</button>
                                    </div>
                                    <p>Already have an account? <Link to={'/login'}>Log in</Link></p>
                                </Form>
                            </div>
                        </Col>
                        <Col lg='6'>a</Col>
                    </Row>
                </Container>
            </div>
        </div >
    );
};

export default Signup;