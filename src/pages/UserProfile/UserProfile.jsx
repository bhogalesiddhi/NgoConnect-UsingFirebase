// UserProfile.js

import React, { useEffect, useState } from 'react';
import './UserProfile.css';
import Navbar from '../../components/Navbar/Navbar';
import volunteer from '../../images/volunteer1.jpg'
import { auth, db } from '../../firebaseConfig';
import { collection, getDoc, getDocs, query, where } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
const cookie = new Cookies();

const UserProfile = (props) => {
  const {setIsAuth} = props;
  const [userData , setUserData] = useState([]);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try{
      await signOut(auth);
      
      
      localStorage.removeItem('userInfo');
      alert("Log-Out Successfull");
      navigate("/login");
    }catch(err){
      console.log(err);
    }
  }
  
  const unsubscribe = auth.onAuthStateChanged( async (user) => {
    if(user){
      const userCollectionRef = collection(db,"users");
      const qu = query(userCollectionRef,where("uid","==",user.uid));
      try{
        const querySnapShot = await getDocs(qu);
        querySnapShot.forEach((doc) => {
          setUserData({...doc.data(),id:doc.id});
          
        })
  
      }catch(err){
        console.log(err)
  
      }
    }else{
      console.log("No user signed in");
    }
    
  })

  useEffect(() => {
    unsubscribe();
  },[]);

  // Sample user information (replace with your user data)
  const user = {
    fullName: 'John Doe',
    email: 'john@example.com',
    location: 'City, Country',
    contactNumber: '123-456-7890',
    skills: ['Skill 1', 'Skill 2', 'Skill 3'],
    // Add more user details as needed
  };



  return (
    <>
    <Navbar/>
        <div className="user-profile">
      <div className="profile-box">
       {
        userData && 
        <div>
        <div className="profile-img">
          {/* User image goes here */}
          <img src={userData.profileImg} alt="User" />
        </div>
        <div className="profile-info">
          <h2>User Profile</h2>
          <div className="info-item">
            <strong>Full Name:</strong> {userData.fullName}
          </div>
          <div className="info-item">
            <strong>Email:</strong> {userData.email}
          </div>
          <div className="info-item">
            <strong>Location:</strong> {userData.location}
          </div>
          <div className="info-item">
            <strong>Contact Number:</strong> {userData.contactNo}
          </div>
          <div className="info-item">
            <strong>Skills:</strong> {user.skills.join(', ')}
          </div>
          <button onClick={handleLogout}>Logout</button>
        </div>
        </div>
       }
      </div>
    </div>
    </>
    
  );
};

export default UserProfile;
