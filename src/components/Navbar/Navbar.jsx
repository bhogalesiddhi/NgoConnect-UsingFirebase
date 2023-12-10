// Navbar.js

import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="path_to_your_logo" alt="Logo" className="logo" />
        <span className="brand">NgoConnect</span>
      </div>
      <div className="navbar-right">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#all-ngos">All Ngos</a></li>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#profile">Profile</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
