// Navbar.js

import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { userState } from '../../atom/useratom';
import { useRecoilState } from 'recoil';
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const [currentUser]= useRecoilState(userState);
  const role = currentUser?.userRole;

  const getProfileLink = () => {
    if (role === 'ngo') {
      return '/ngoPortfolio';
    } else if (role === 'user') {
      return '/userProfile';
    }else if (role === 'admin'){
      return '/adminProfile';
    }else {
      return '/login';
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
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/ngoCategory">All NGOs</Link>{" "}
          </li>
          <li>
            <a href="#about-us">About Us</a>
          </li>
          <li>
            {" "}
            <Link to={getProfileLink()}>Profile</Link>
          </li>
          {!currentUser ? (
            <li>
              <Link to="/login">Login</Link>
            </li>
          ) : (
            <li>
            
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
