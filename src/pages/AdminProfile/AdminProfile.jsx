// AdminProfile.js

import React, { useEffect, useState } from 'react';
import './AdminProfile.css'; // Create a CSS file for styling if needed

import { auth, db } from '../../firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const AdminProfile = () => {
  const [adminData, setAdminData] = useState({});
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('userInfo');
      alert('Log-Out Successful');
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const adminCollectionRef = collection(db, 'admin');
        const qu = query(adminCollectionRef, where('uid', '==', user.uid));
        try {
          const querySnapshot = await getDocs(qu);
          querySnapshot.forEach((doc) => {
            setAdminData({ ...doc.data(), id: doc.id });
          });
        } catch (err) {
          console.log(err);
        }
      } else {
        console.log('No user signed in');
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      
      <div className="admin-profile">
        <div className="profile-box">
          {adminData && (
            <div>
              <div className="profile-info">
                <h2>Admin Profile</h2>
                <div className="profile-img">
  {/* Placeholder for admin's profile image */}
                <img src={adminData.profile} alt="Admin" />
                 </div>

                <div className="info-item">
                  <strong>Full Name:</strong> {adminData.fname}
                </div>
                <div className="info-item">
                  <strong>Email:</strong> {adminData.email}
                </div>
                {/* Add more admin details as needed */}
                <button onClick={handleLogout}>Logout</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminProfile;
