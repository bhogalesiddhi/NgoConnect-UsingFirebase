import React from 'react';
import './AboutUs.css'; // Import your CSS file for styling
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
   <>
    <Navbar/>
    <div className="about-us">
      <section className="intro">
        <h1>Welcome to NgoConnect</h1>
        <p>This platform brings NGOs and volunteers together on a single platform.</p>
        <p>The idea originated from the difficulty in finding NGOs online.</p>
      </section>

      <section className="story">
        <h2>Our Story</h2>
        <p>NgoConnect was founded with the aim of bridging the gap between NGOs and volunteers by providing a centralized platform for easy accessibility and connectivity.</p>
      </section>

      <section className="mission-values">
        <h2>Mission and Values</h2>
        <p>Our mission is to create a seamless platform that empowers NGOs and volunteers to collaborate efficiently, enabling positive social change.</p>
        <ul>
          <li>Empathy and Compassion</li>
          <li>Transparency and Accountability</li>
          <li>Community Engagement</li>
        </ul>
      </section>

      <section className="team">
        <h2>Our Team</h2>
        <p>We are a team of four individuals - Nidhi, Siddhi, Shivani, and Pranathi - currently in the 3rd year of engineering.</p>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        {/* <div className="social-links">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
            <span><Link to=''></Link></span>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
            <span><Link to='https://www.instagram.com/bhogale_siddhi28/'>bhogale_siddhi28</Link></span>
          </a>
        </div> */}
        <p>For inquiries, reach us at:</p>
        <p>Email: bhogalesiddhi640@gmail.com</p>
        <p>Phone: 9324337369</p>
      </section>

      <section className="get-involved">
        <h2>Get Involved</h2>
        <p>Join us in making a difference! Whether you're looking to volunteer, donate, or participate, your contribution matters. Together, we can create a better world.</p>
      </section>
    </div>
   </>
  );
};

export default AboutUs;
