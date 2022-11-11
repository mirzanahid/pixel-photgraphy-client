import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../../assets/google.png'
import useTitle from '../../../hooks/useTitle';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../../../firebase/firebase.config';
import { toast } from 'react-toastify';

const auth = getAuth(app)
// google provider
const provider = new GoogleAuthProvider();

const Login = () => {
  const { user, login } = useContext(AuthContext);
  const navigate = useNavigate()
  const [logInError, setLogInError] = useState(null);

  // location state
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'
  useTitle('Login')
  //login with email and password
  const loginHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // login with email  and password
    login(email, password)
      .then(result => {
        const user = result.user;
        const currentUser = {
          email: user.email
        }
        //  get jwt token
        fetch(`https://pixel-photography-server.vercel.app/jwt`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(currentUser)

        })
          .then(res => res.json())
          .then(data => {
            localStorage.setItem('token', data.token)
          })
        toast.success('Login Successful', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate(from, { replace: true })
        form.email.reset()
        form.password.reset()
      })
      .catch(error => {
        if (user?.email !== email || user?.password !== password) {
          setLogInError('Your email and password are not valid')

        }

      });
  }


  //log in with google 
  const handlerForGoogleSignin = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        const currentUser = {
          email: user.email
        }
        //  get jwt token
        fetch(`https://pixel-photography-server.vercel.app/jwt`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(currentUser)

        })
          .then(res => res.json())
          .then(data => {
            localStorage.setItem('token', data.token)
          })

          navigate(from, { replace: true })
        toast.success('Login Successful', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch(error => {
        console.error('error', error)
      })

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
                </Form>
                <div className="button-group">
                  <button onClick={handlerForGoogleSignin} className='social-signup'><img className='google-icon' src={google} alt="" /> Continue with Google</button>
                </div>
                <p className='signUp-foot'>Don't you have an account? <Link to={'/signup'}>Sign Up</Link></p>
              </div>
            </Col>
            <Col lg='6'></Col>
          </Row>
        </Container>
      </div>
    </div >
  );
};

export default Login;