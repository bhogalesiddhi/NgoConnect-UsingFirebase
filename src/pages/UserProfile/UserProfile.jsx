// UserProfile.js

import React from 'react';
import './UserProfile.css';
import Navbar from '../../components/Navbar/Navbar';
import volunteer from '../../images/volunteer1.jpg'

const UserProfile = () => {
  // Sample user information (replace with your user data)
  const user = {
    fullName: 'John Doe',
    email: 'john@example.com',
    location: 'City, Country',
    contactNumber: '123-456-7890',
    skills: ['Skill 1', 'Skill 2', 'Skill 3'],
    // Add more user details as needed
  };

  const handleLogout = () => {
    // Add logout functionality here
    console.log('Logged out');
  };

  return (
    <>
    <Navbar/>
        <div className="user-profile">
      <div className="profile-box">
        <div className="profile-img">
          {/* User image goes here */}
          <img src={volunteer} alt="User" />
        </div>
        <div className="profile-info">
          <h2>User Profile</h2>
          <div className="info-item">
            <strong>Full Name:</strong> {user.fullName}
          </div>
          <div className="info-item">
            <strong>Email:</strong> {user.email}
          </div>
          <div className="info-item">
            <strong>Location:</strong> {user.location}
          </div>
          <div className="info-item">
            <strong>Contact Number:</strong> {user.contactNumber}
          </div>
          <div className="info-item">
            <strong>Skills:</strong> {user.skills.join(', ')}
          </div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default UserProfile;
