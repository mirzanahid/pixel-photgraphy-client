import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
    return (
        <div className='contact'>
            <h4 className='contact-title'>Looking for a Photographer?</h4>
            <p className='contact-paragraph'>I am a experienced Wedding photographer. If you interested Contact me.</p>
            <Link className='primary-button contact-btn'>Get In Touch</Link>
        </div>
    );
};

export default Contact;