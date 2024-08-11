import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
    <header className="header-container">
        <h1 className="logo">Restaurant/Hotel</h1>
        <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    </header>
);

export default Header;