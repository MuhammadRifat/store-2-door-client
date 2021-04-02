import React, { useContext } from 'react';
import { Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import './Header.css';
import logo from '../../default-monochrome.svg';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#">
            <img
                src={logo}
                width="200px"
                className="d-inline-block align-top"
                alt="Store 2 Door"
            />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                
                <Link className="link" to="/home">Home </Link>
                <Link className="link" to="/orders">Orders </Link>
                <Link className="link" to="/admin">Admin </Link>
                <Link className="link" to="/deals">Deals </Link>
                {
                    loggedInUser.email ? <Image src={loggedInUser.photo} alt={loggedInUser.name} style={{width:'40px', height:'40px', marginRight:'60px'}} roundedCircle/> : <Link className="link" to="/login"><button id="login-btn">Login</button></Link>
                }
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;