import React from 'react';
import './Contact.css';

const Contact = () => (
    <section className="contact-container">
        <h2>Contact Us</h2>
        <form className="contact-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
        </form>
    </section>
);

export default Contact;