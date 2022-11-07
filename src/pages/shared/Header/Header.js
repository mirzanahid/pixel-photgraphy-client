import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'




import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar className='navbar' expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className="nav-items">Home</NavLink>
                        <NavLink className="nav-items">Blog</NavLink>
                        <NavLink className="nav-items">Log in</NavLink>
                        <NavLink className="nav-items">Sign up</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;