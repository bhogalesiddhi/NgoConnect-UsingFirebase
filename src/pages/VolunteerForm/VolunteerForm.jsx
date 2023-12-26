// VolunteerForm.js

import React, { useState } from 'react';
import './VolunteerForm.css';
import Navbar from '../../components/Navbar/Navbar';
import { db } from '../../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const VolunteerForm = () => {
  const {ngoId ,projectId , eventId} =useParams();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    availability: '',
    location: '',
    pastExperience: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Logic to handle form submission (e.g., sending data to backend)
    const volunteerCollection = collection(db,`ngo/${ngoId}/projects/${projectId}/events/${eventId}/volunteers`);
   try{
    const volunteer = {
      username : formData.username,
      email : formData.email,
      availability:formData.location,
      pastExperience:formData.pastExperience
    };

    await addDoc(volunteerCollection,volunteer)
    alert("You have succefully registered for the event");
    
   }catch(err){
    console.log(err);
   }
  };

  return (
   <>
   <Navbar/>
     <div className="volunteer-form">
      <h2>Volunteer Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="availability">Availability</label>
          <input
            type="text"
            id="availability"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="pastExperience">Past Experience</label>
          <textarea
            id="pastExperience"
            name="pastExperience"
            value={formData.pastExperience}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
   </>
  );
};

export default VolunteerForm;
