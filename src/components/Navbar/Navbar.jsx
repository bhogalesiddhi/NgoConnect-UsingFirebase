// Navbar.js

import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const userInfoString = localStorage.getItem('userInfo');
  const userInfo = JSON.parse(userInfoString); // Parse the string to object
  const role = userInfo ? userInfo.userRole : null; // Get userRole from userInfo

  const getProfileLink = () => {
    if (role === 'ngo') {
      return '/ngoPortfolio';
    } else if (role === 'user') {
      return '/userProfile';
    } else {
      console.log('Role not found');
      return '/';
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="path_to_your_logo" alt="Logo" className="logo" />
        <span className="brand">NgoConnect</span>
      </div>
      <div className="navbar-right">
        <ul className="nav-links">
          <li><Link to='/'>Home</Link></li>
          <li> <Link to='/ngoCategory'>All NGOs</Link> </li>
          <li><a href="#about-us">About Us</a></li>
          <li> <Link to={getProfileLink()}>Profile</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
