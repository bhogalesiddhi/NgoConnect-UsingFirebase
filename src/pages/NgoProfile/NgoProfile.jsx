// NgoProfile.js

import React from 'react';
import './NgoProfile.css';
import Navbar from '../../components/Navbar/Navbar';
// import ngoLogo from '../../images/ngo-logo.png'; // Replace this with the actual NGO logo

const NgoProfile = () => {
  // Sample NGO information (replace with actual data)
  const ngoInfo = {
    name: 'NGO Name',
    missionStatement: 'Mission statement goes here',
    openingTiming: 'Monday - Friday, 9 AM - 5 PM',
    location: 'Location details',
    projects: ['Project 1', 'Project 2', 'Project 3'],
    // Add more NGO details as needed
  };

  const handleVolunteer = () => {
    // Handle volunteer functionality
    console.log('Volunteer');
  };

  const handleDonate = () => {
    // Handle donate functionality
    console.log('Donate');
  };

  return (
    <>
      <Navbar />
      <div className="ngo-profile">
        <div className="profile-box">
          <div className="ngo-logo">
            <img src="" alt="NGO Logo" />
          </div>
          <div className="profile-info">
            <h2>{ngoInfo.name}</h2>
            <p><strong>Mission Statement:</strong> {ngoInfo.missionStatement}</p>
            <p><strong>Opening Timing:</strong> {ngoInfo.openingTiming}</p>
            <p><strong>Location:</strong> {ngoInfo.location}</p>
            <h3>Projects:</h3>
            <ul>
              {ngoInfo.projects.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
            <div className="action-buttons">
              <button onClick={handleVolunteer}>Volunteer</button>
              <button onClick={handleDonate}>Donate</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NgoProfile;
