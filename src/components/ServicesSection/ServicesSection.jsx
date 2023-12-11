// ServicesSection.js

import React from 'react';
import './ServicesSection.css';

// // Import your images for services
// import browseNGOsImg from '../../images/browse_ngos.jpg';
// import searchNGOsImg from '../../images/search_ngos.jpg';
// import volunteerImg from '../../images/volunteer_opportunities.jpg';
// import NGOProjectsImg from '../../images/ngo_projects_events.jpg';

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h2 className="section-heading">Our Services</h2>
      <div className="services-container">
        <div className="service">
          <img src="" alt="Browse NGOs" className="service-image" />
          <h3>Browse NGOs</h3>
          <p>Explore a diverse range of NGOs and their causes.</p>
        </div>
        <div className="service">
          <img src="" alt="Search NGOs" className="service-image" />
          <h3>Search NGOs</h3>
          <p>Find NGOs by location, name, or cause.</p>
        </div>
        <div className="service">
          <img src="" alt="Volunteer Opportunities" className="service-image" />
          <h3>Volunteer Opportunities</h3>
          <p>Discover volunteer opportunities with various NGOs.</p>
        </div>
        <div className="service">
          <img src="" alt="NGO Projects & Events" className="service-image" />
          <h3>NGO Projects & Events</h3>
          <p>NGOs can add and manage projects and events.</p>
        </div>
        {/* Add more services as needed */}
      </div>
    </section>
  );
};

export default ServicesSection;
