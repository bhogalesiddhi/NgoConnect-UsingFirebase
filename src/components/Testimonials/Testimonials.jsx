// Testimonials.js

import React from 'react';
import './Testimonials.css';
// import testimonialImage1 from '../../images/testimonial1.jpg';
// import testimonialImage2 from '../../images/testimonial2.jpg';
// import testimonialImage3 from '../../images/testimonial3.jpg';

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2 className="section-heading">Testimonials</h2>
      <div className="testimonials-container">
        <div className="testimonial-card">
          <img src="" alt="Testimonial 1" className="testimonial-image" />
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mollis consequat mi."</p>
          <span>- John Doe, Volunteer</span>
        </div>
        <div className="testimonial-card">
          <img src="" alt="Testimonial 2" className="testimonial-image" />
          <p>"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
          <span>- Jane Smith, NGO Representative</span>
        </div>
        <div className="testimonial-card">
          <img src="" alt="Testimonial 3" className="testimonial-image" />
          <p>"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p>
          <span>- David Johnson, Supporter</span>
        </div>
        {/* Add more testimonials as needed */}
      </div>
    </section>
  );
};

export default Testimonials;
