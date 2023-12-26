import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import './ViewEventsUserSide.css'
import Navbar from '../../components/Navbar/Navbar';

const ViewEventsUserSide = () => {
  const { ngoId , projectId } = useParams();
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  const handleVolunteer = (eventId) => {
    navigate(`/${ngoId}/${projectId}/${eventId}/form`)
  }

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsRef = collection(db, `ngo/${ngoId}/projects/${projectId}/events`);
        const snapshot = await getDocs(eventsRef);
        const eventsData = [];
        snapshot.forEach((doc) => {
          eventsData.push({ id: doc.id, ...doc.data() });
        });
        setEvents(eventsData);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, [projectId]);

  return (
    <>
    <Navbar/>
    <div className="event-list">
      {events.map((event) => (
        <div key={event.id} className="event-card">
          <img src={event.eventImage} alt="Event" />
          <h3>{event.eventName}</h3>
          <p>{event.eventDescription}</p>
          <p>Location: {event.location}</p>
          <p>Date: {event.startDate} - {event.endDate}</p>
          <p>Time: {event.startTime} - {event.endTime}</p>
          <button onClick={() =>handleVolunteer(event.id)}>Volunteer</button>
        </div>
      ))}
    </div>
    </>
  );
};

export default ViewEventsUserSide;
