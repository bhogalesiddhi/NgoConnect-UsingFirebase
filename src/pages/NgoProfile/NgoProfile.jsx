import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './NgoProfile.css';
import volunteer from '../../images/volunteer1.jpg';

const NgoProfile = () => {
  return (
    <div>
      <Navbar />
      <div className='ngoProfile'>
        <div className='topSection'>
          <div className='topLeft'>
            <img src={volunteer} alt='ngoLogo'></img>
          </div>
          <div className='topRight'> 
            <div className='ngoName'>
              <h2 className='subtitle'>Ngo Name</h2>
            </div>
            <div className='ngoMission'>
              <h4 className='subtitle'>Mission Statement</h4>
              <span>This is our Mission</span>
            </div>
            <div className='ngoLocation'>
              <h4 className='subtitle'>Location</h4>
              <span>Mumbai</span>
            </div>
            <div className='ngoTimings'>
              <h4 className='subtitle'>Timings</h4>
              <span>3:00 pm - 8pm</span>
            </div>
            <div className='ngoButton'>
              <button>Volunteer</button>
              <button>Donate</button>
            </div>
          </div>
        </div>
        <div className='hrLine'>
          <hr />
        </div>
        <div className='projectCards'>
          <div className='card'>
            <img src={volunteer} alt='Project' />
            <div className='cardDescription'>Project description goes here</div>
            <div className='cardDate'>Date: MM/DD/YYYY</div>
            <button className='viewEventsButton'>View Events</button>
          </div>
          <div className='card'>
            <img src={volunteer} alt='Project' />
            <div className='cardDescription'>Project description goes here</div>
            <div className='cardDate'>Date: MM/DD/YYYY</div>
            <button className='viewEventsButton'>View Events</button>
          </div>
          {/* Add more cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default NgoProfile;
