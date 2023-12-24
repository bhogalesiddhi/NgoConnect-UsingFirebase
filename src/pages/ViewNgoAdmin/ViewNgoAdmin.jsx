// ViewNgoAdmin.js

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { db ,auth } from '../../firebaseConfig';
import { doc, getDoc , deleteDoc } from 'firebase/firestore';
import './ViewNgoAdmin.css'; // Import CSS file for styling
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

const ViewNgoAdmin = () => {
  const { ngoId } = useParams();
  const [ngoInfo, setNgoInfo] = useState(null);
  const navigate = useNavigate();
  const docRef = doc(db, 'ngo', ngoId);
  const fetchNgoDetails = async () => {
    try {
      
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setNgoInfo({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.log('No such document!');
      }
    } catch (err) {
      console.error('Error loading Ngo Info', err);
    }
  };

  // const handleLogout = async () => {
  //   try{
  //     await signOut(auth);
      
      
  //     localStorage.removeItem('userInfo');
  //     alert("Log-Out Successfull");
  //     navigate("/login");
  //   }catch(err){
  //     console.log(err);
  //   }
  // }

  const handleDelete = async () => {
    try{
      await signInWithEmailAndPassword(auth,ngoInfo.email,ngoInfo.password);
      const currentUser = auth.currentUser;
      if (currentUser) {
        await currentUser.delete();
        console.log('Ngo deleted successfully');
        
        await deleteDoc(docRef);
        navigate('/adminDashboard');
      
      } else {
        throw new Error('No user is currently signed in');
      }
      
    }catch(err){
      console.log("Enable to delete");
    }
  }

  useEffect(() => {
    fetchNgoDetails();
  }, [ngoId]);

  return (
    <div className="ngo-details-container">
      {ngoInfo && (
        <div className="ngo-details">
          <div className="top-section">
            <img src={ngoInfo.logoImg} alt="Ngo Logo" className="ngo-logo" />
            <h2>{ngoInfo.ngoName}</h2>
          </div>
          <div className="middle-section">
            <div className='mission'>
            <h3>Mission:</h3>
            <p>{ngoInfo.mission}</p>
            </div>
            <div className="info-items">
              <div className='info'>
                <h3>Location:</h3>
                <p>{ngoInfo.location}</p>
              </div>
              <div className='info'>
                <h3>Timings:</h3>
                <p>{ngoInfo.timings}</p>
              </div>
            </div>
          </div>
          <div className="bottom-section">
            <h3>Certificate:</h3>
            <img src={ngoInfo.certiImg} alt="Ngo Certificate" className="certificate-img" />
          </div>
          <button onClick={handleDelete}>Delete Ngo</button>
         
        </div>
      )}
    </div>
  );
};

export default ViewNgoAdmin;
