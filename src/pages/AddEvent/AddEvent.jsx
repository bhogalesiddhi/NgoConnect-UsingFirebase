import React, { useState } from 'react';
import './AddEvent.css'; // Import the CSS file
import Navbar from '../../components/Navbar/Navbar';
import { useParams } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { db, storage } from '../../firebaseConfig';
import { ref, uploadBytes , getDownloadURL } from 'firebase/storage';

const AddEvent = () => {

  const {ngoId ,projectId} = useParams();

  const [eventName, setEventName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [location, setLocation] = useState('');
const [eventImage, setEventImage] = useState('');

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setEventImage(selectedImage);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    
        const eventCollectionRef = collection(db,`ngo/${ngoId}/projects/${projectId}/events`);
        const storageRef = ref(storage,`ngoEvent/${eventImage.name}`)

        try{
          let link;
          try{
            const snapshot = await uploadBytes(storageRef,eventImage)
            link = await getDownloadURL(snapshot.ref);
          }catch(err){
            console.log("Error uploading image", err);
          }
            const newEvent = {
        
                eventName: eventName,
                eventDescription: description,
                 startDate : startDate,
                endDate : endDate,
                startTime : startTime,
                endTime: endTime,
                 location:location,
                eventImage: link,
               
         };
           await addDoc(eventCollectionRef,newEvent);
           setEventName('');
           setDescription('');
           setStartDate('');
           setEndDate('');
           setStartTime('');
           setEndTime('');
           setLocation('');
           setEventImage('');
           alert("Event added successfully")
        }catch(err){
          console.log("Error adding event",err);
        }
    
    // Reset form fields after submission
 
  };

  return (
    <div className='wrapper'>
    <Navbar/>
        <div className="add-event-container">
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Event Name:</label>
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>End Date:</label>
          <input
            type="date"
            className="form-control"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Start Time:</label>
          <input
            type="time"
            className="form-control"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            required
          />
        </div>
        <div className="form-group"> 
          <label>End Time:</label>
          <input
            type="time"
            className="form-control"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            required
          />
        </div>
        <div className="form-group" >
          <label>Location:</label>
          <input
            type="text"
            className="form-control"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Event Image:</label>
          <input
            type="file"
            accept="image/*"
             onChange={handleImageChange}
            className="form-control"
            // required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default AddEvent;
