// Import necessary dependencies
import React, { useEffect, useState } from 'react';
import { collection, getDocs ,doc} from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import './VolunteerList.css'; // Import your CSS file for styling
import { useNavigate, useParams } from 'react-router-dom';
import emailjs from '@emailjs/browser';


const VolunteerList = () => {
    const { ngoId, projectId, eventId } = useParams();
    // const [ngoDetails, setNgoDetails] = useState(null);
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
    // const fetchNgoDetails = async () => {
    //   try {
    //     const ngoDocRef = doc(db, 'ngo', ngoId); // Assuming 'ngo' is the collection name
    //     const ngoSnapshot = await getDocs(ngoDocRef);
    //     const ngoData = ngoSnapshot.docs.map((doc) => ({
    //       id: doc.id,
    //       ...doc.data(),
    //     }))[0]; // Assuming there's only one document with the specified ID

    //     setNgoDetails(ngoData);
    //     console.log(ngoData)
    //   } catch (error) {
    //     console.error('Error fetching NGO details:', error);
    //   }
    // };

    fetchVolunteers();
   
  }, [ngoId, projectId, eventId]);


  // const handleSubmit = (volunteer) => 
  // {
    
  //   const serviceId = 'service_c586tkm';
  //   const templateId = 'template_286ui4n';
  //   const publicKey = 'HHaKb_dGM7pKHYJUj';

  //   const templateParams = {
  //     from_name: ngoDetails ? ngoDetails.name : 'Your NGO', // Using NGO details in the email
  //     from_email: ngoDetails ? ngoDetails.email : 'yourngo@example.com',
  //     to_name: volunteer.username,
  //     to_email: volunteer.email,
  //     message: `Hello ${volunteer.username},\n\nThank you for volunteering with us! We appreciate your support.`,

  //   }

  //   console.log(templateParams)

  //   emailjs.send(serviceId,templateId,templateParams,publicKey)
  //   .then((response) => {
  //     alert('Email sent successfully',response);
  //   }).catch((err) => {
  //     console.log('Error sendding email',err)
  //   })

  // }

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
              {/* <td> */}
                {/* You can add action buttons here, like editing or removing the volunteer */}
                {/* /*<button onClick={() => handleSubmit(volunteer)}>Allow Volunteer</button> */ }
              {/* </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VolunteerList;
