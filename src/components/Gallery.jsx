import React from 'react';
import './Gallery.css';

const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg',
    'images/image5.jpg',
    'images/image6.jpg',
    // Add more image paths here
];

const Gallery = () => (
    <div className="gallery">
        <h2>Gallery</h2>
        <div className="gallery-grid">
            {images.map((src, index) => (
                <div key={index} className="gallery-item">
                    <img src={src} alt={`Gallery ${index + 1}`} />
                </div>
            ))}
        </div>
    </div>
);

export default Gallery;