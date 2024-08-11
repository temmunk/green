import React from 'react';
import './Hero.css';

const Hero = () => (
    <section className="hero-container" style={{ backgroundImage: `url(/background.jpg)` }}>
        <div className="hero-text">
            <h1>Welcome to Our Restaurant/Hotel</h1>
            <p>Experience the best dining and hospitality in town.</p>
        </div>
    </section>
);

export default Hero;