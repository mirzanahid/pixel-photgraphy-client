import React from 'react';
import { Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import './Footer.css';
import logo from '../../../assets/logo1.svg'
const Footer = () => {
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
                        <Link className='heading-2'>Home</Link>
                        <Link className='heading-2'>Home</Link>
                        <Link className='heading-2'>Home</Link>
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
                        <p>© Copyright 2022 | LoveLove | All right reserved.</p>
                    </div>
                </Container >
            </div>
        </div>
    );
};

export default Footer;