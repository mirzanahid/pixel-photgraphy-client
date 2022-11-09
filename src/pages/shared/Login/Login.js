import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import google from '../../../assets/google.png'
import useTitle from '../../../hooks/useTitle';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const Login = () => {
  useTitle('Login')
  const { user, login, load } = useContext(AuthContext);
  const navigate = useNavigate()

  const [logInError, setLogInError] = useState(null);


  //login with email and password
  const loginHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // login with email  and password
    login(email, password)
      .then(result => {
        form.email.reset()
        form.password.reset()
      })
      .catch(error => {
        if (user?.email !== email && user?.password !== password) {
          setLogInError('Your email and password are not valid')

        }

      });
  }

  return (
    <div className='login'>
      <div className="overlay">
        <Container>
          <Row>
            <Col lg='6'>
              <div className="signup-login-form">
                <Form onSubmit={loginHandler}>
                  <h2 className='signup-heading'>Log In</h2>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" name='email' />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" name='password' />
                    <p className='error-text'>{logInError}</p>
                  </Form.Group>
                  <Button className='submit-btn' type="submit">
                    Log In
                  </Button>
                  <p className='or'>Or</p>
                  <div className="button-group">
                    <button className='social-signup'><img className='google-icon' src={google} alt="" /> Continue with Google</button>
                  </div>
                  <p>Don't you have an account? <Link to={'/signup'}>Sign Up</Link></p>
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

export default Login;