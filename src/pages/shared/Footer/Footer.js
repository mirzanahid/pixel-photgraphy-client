import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import './Footer.css';
import logo from '../../../assets/logo1.svg'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
const Footer = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='footer'>
            <div className="overlay">
                <Container>
                    <div className="foot-logo">
                        <img className='logo' src={logo} alt="" />
                    </div>
                    <div className="links">
                        <Link className='heading-2'>Home</Link>
                        <Link className='heading-2'>Blog</Link>
                        <Link className='heading-2'>All Services</Link>
                        {
                            user?.email ?
                                <>
                                    <Link className='heading-2'>My Reviews</Link>
                                    <Link className='heading-2'>Add Services</Link>
                                </>
                                :
                                null
                        }
                    </div>
                    <div className="social">
                        <ul>
                            <li><Link><FaFacebookF /></Link></li>
                            <li><Link><FaInstagram /></Link></li>
                            <li><Link><FaTwitter /></Link></li>
                            <li><Link><FaLinkedin /></Link></li>
                            <li><Link><FaWhatsapp /></Link></li>
                        </ul>
                    </div>
                    <div className="footer-bottom">
                        <p>© Copyright 2022 | PixelsPhotography | All right reserved.</p>
                    </div>
                </Container >
            </div>
        </div>
    );
};

export default Footer;