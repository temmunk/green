import React from 'react';
import './Services.css';

const Services = () => (
    <section className="services-container">
        <h2>Our Services</h2>
        <div className="services-grid">
            <div className="service-card">
                <h3>Fine Dining</h3>
                <p>Enjoy gourmet meals prepared by top chefs.</p>
            </div>
            <div className="service-card">
                <h3>Luxury Rooms</h3>
                <p>Stay in our comfortable and well-appointed rooms.</p>
            </div>
            <div className="service-card">
                <h3>Event Hosting</h3>
                <p>Host your events in our beautiful venue spaces.</p>
            </div>
        </div>
    </section>
);

export default Services;