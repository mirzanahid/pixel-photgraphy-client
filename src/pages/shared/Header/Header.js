import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import logo from '../../../assets/logo.svg'
import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const [expanded, setExpanded] = useState(false);


    return (
        <Navbar expanded={expanded} className='navbar' expand="lg">
            <Container>
                <Navbar.Brand> <Link to={'/'}><img className='logo' src={logo} alt="" /></Link></Navbar.Brand>
                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto d-flex align-items-center main-nav">
                        <NavLink onClick={() => setExpanded(false)} to={'/'} className={({ isActive }) => isActive ? 'active' : undefined}>Home</NavLink>
                        <NavLink onClick={() => setExpanded(false)} to={'/blog'} className={({ isActive }) => isActive ? 'active' : undefined}>Blog</NavLink>
                        {
                            user?.email ?
                                <>
                                    <NavLink onClick={() => setExpanded(false)} to={'/myreviews'} className={({ isActive }) => isActive ? 'active' : undefined}>My Reviews</NavLink>
                                    <NavLink onClick={() => setExpanded(false)} to={'/addservice'} className={({ isActive }) => isActive ? 'active' : undefined}>Add Service</NavLink>
                                    <Link onClick={logout} to={'/login'} className="primary-button authentication-btn">Log Out</Link>
                                </>

                                : 
                                <Link onClick={() => setExpanded(false)} to={'/login'} className="primary-button authentication-btn">Log in</Link>
                        }


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;