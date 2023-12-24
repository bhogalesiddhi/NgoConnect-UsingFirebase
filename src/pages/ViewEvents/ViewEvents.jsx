import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs , doc , deleteDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import './ViewEvents.css'
import Navbar from '../../components/Navbar/Navbar';

const EventList = () => {
  const { ngoId , projectId } = useParams();
  const [events, setEvents] = useState([]);

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

  const handleDeleteEvent = async (eventId) => {
    try {
      const eventRef = doc(db, `ngo/${ngoId}/projects/${projectId}/events`, eventId);
      await deleteDoc(eventRef);
      setEvents(events.filter((event) => event.id !== eventId));
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  }

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
          <button onClick={() => handleDeleteEvent(event.id)}>Delete Event</button>
        </div>
      ))}
    </div>
    </>
  );
};

export default EventList;
