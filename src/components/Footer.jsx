import React from 'react';
import './Footer.css';

const Footer = () => (
    <footer className="footer-container">
        <p>&copy; {new Date().getFullYear()} Restaurant/Hotel. All rights reserved.</p>
        <p>Follow us on <a href="#">Facebook</a>, <a href="#">Twitter</a>, and <a href="#">Instagram</a>.</p>
    </footer>
);

export default Footer;