// VolunteersSection.js

import React from 'react';
import './VolunteersSection.css';

const VolunteersSection = () => {
  return (
    <section className="volunteers-section">
      <h2 className="section-heading">Hear it from our volunteers</h2>
      <div className="cards-container">
        <div className="card">
          <img src="path_to_image_1" alt="Volunteer 1" className="card-image" />
          <p className="card-message">Message 1 from Volunteer</p>
        </div>
        <div className="card">
          <img src="path_to_image_2" alt="Volunteer 2" className="card-image" />
          <p className="card-message">Message 2 from Volunteer</p>
        </div>
        <div className="card">
          <img src="path_to_image_3" alt="Volunteer 3" className="card-image" />
          <p className="card-message">Message 3 from Volunteer</p>
        </div>
      </div>
    </section>
  );
};

export default VolunteersSection;
