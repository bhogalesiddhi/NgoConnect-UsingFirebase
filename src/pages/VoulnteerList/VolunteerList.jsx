// Import necessary dependencies
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import './VolunteerList.css'; // Import your CSS file for styling
import { useNavigate, useParams } from 'react-router-dom';

const VolunteerList = () => {
    const { ngoId, projectId, eventId } = useParams();
   
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const volunteersRef = collection(
          db,
          `ngo/${ngoId}/projects/${projectId}/events/${eventId}/volunteers`
        );
        const snapshot = await getDocs(volunteersRef);
        const volunteersData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
    
        setVolunteers(volunteersData);
        console.log(volunteersData);
      } catch (error) {
        console.error('Error fetching volunteers:', error);
      }
    };

    fetchVolunteers();
  }, [ngoId, projectId, eventId]);

  return (
    <div className="volunteer-list">
      <h2>Volunteers List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Availability</th>
            <th>Location</th>
            <th>Past Experience</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {volunteers.map((volunteer) => (
            <tr key={volunteer.id}>
              <td>{volunteer.username}</td>
              <td>{volunteer.email}</td>
              <td>{volunteer.availability}</td>
              <td>{volunteer.location}</td>
              <td>{volunteer.pastExperience}</td>
              <td>
                {/* You can add action buttons here, like editing or removing the volunteer */}
                <button>Allow Volunteer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VolunteerList;
