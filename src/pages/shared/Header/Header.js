import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import logo from '../../../assets/logo1.svg'
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    console.log(user)

    return (
        <Navbar className='navbar' expand="lg">
            <Container>
                <Navbar.Brand> <Link to={'/'}><img className='logo' src={logo} alt="" /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className="nav-items">Home</NavLink>
                        <NavLink className="nav-items">Blog</NavLink>
                        {
                            user?.uid ?
                                <NavLink onClick={logout} to={'/login'} className="nav-items">Log Out</NavLink>
                                :
                                <NavLink  to={'/login'} className="nav-items">Log in</NavLink>
                        }


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;