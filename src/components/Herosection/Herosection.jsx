// HeroSection.js

import React from 'react';
import './Herosection.css';
import hero from '../../images/header.png'

const Herosection = () => {
  return (
    <div className="hero-section">
      <img src={hero} alt="Hero" className="hero-image" />
    </div>
  );
};

export default Herosection;
