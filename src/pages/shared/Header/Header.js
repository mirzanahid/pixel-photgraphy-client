import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import logo from '../../../assets/logo.svg'
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    return (
        <Navbar className='navbar' expand="lg">
            <Container>
                <Navbar.Brand> <Link to={'/'}><img className='logo' src={logo} alt="" /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto d-flex align-items-center main-nav">
                        <NavLink to={'/'} className={({ isActive }) => isActive ? 'active' : undefined}>Home</NavLink>
                        <NavLink to={'/blog'} className={({ isActive }) => isActive ? 'active' : undefined}>Blog</NavLink>
                        {
                            user?.uid ?
                                <>
                                    <NavLink to={'/myreviews'} className={({ isActive }) => isActive ? 'active' : undefined}>My Reviews</NavLink>
                                    <NavLink to={'/addservice'} className={({ isActive }) => isActive ? 'active' : undefined}>Add Service</NavLink>
                                    <NavLink onClick={logout} to={'/login'} className="primary-button authentication-btn">Log Out</NavLink>
                                </>

                                :
                                <NavLink to={'/login'} className="primary-button authentication-btn">Log in</NavLink>
                        }


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;