// Testimonials.js

import React from 'react';
import './Testimonials.css';
import testimonialImage1 from '../../images/shivani.jpg';
import testimonialImage2 from '../../images/siddhi.jpg';
import testimonialImage3 from '../../images/nidhi.jpg';

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2 className="section-heading">Hear It From Our Volunteers</h2>
      <div className="testimonials-container">
        <div className="testimonial-card">
          <img src={testimonialImage1} alt="Testimonial 1" className="testimonial-image" />
          <p>Being part of NGO Connect has been a transformative experience! The platform's seamless interface made volunteering 
          effortless, enabling me to contribute meaningfully to causes I deeply care about. </p>
          {/* I'm grateful for the opportunity to connect, learn, and make a real difference in the community.</p> */}
          <span>- Shivani Nikam, Volunteer</span>
        </div>
        <div className="testimonial-card">
          <img src={testimonialImage2} alt="Testimonial 2" className="testimonial-image" />
          <p>The diversity of opportunities offered allowed me to explore various causes, broaden my skill set, and engage with passionate individuals</p>
          <span>- Siddhi Bhogale, NGO Representative</span>
        </div>
        <div className="testimonial-card">
          <img src={testimonialImage3} alt="Testimonial 3" className="testimonial-image" />
          <p> Through this platform, I've discovered avenues to channel my energy towards noble causes. 
          The community spirit and collaborative efforts fostered here are truly inspiring. </p>
          <span>- Nidhi Nayak, Supporter</span>
        </div>
        {/* Add more testimonials as needed */}
      </div>
    </section>
  );
};

export default Testimonials;
