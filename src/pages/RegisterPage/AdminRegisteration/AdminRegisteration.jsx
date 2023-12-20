import React, { useState } from 'react'
import './AdminRegisteration.css'
import { auth,db,storage } from '../../../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";

const AdminRegisteration = () => {
  const navigate = useNavigate();
  const [fname , setFname] = useState("");
  const [email , setEmail] = useState("");
  const [contact ,setContact] = useState("");
  const [password,setPassword] = useState("");
  const [profile,setProfile] = useState("");
  const [role,setRole] = useState("admin");

  const adminCollectionRef = collection(db,"admin");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let link;
      const storageRef = ref(storage, `adminProfile/${profile.name}`);
      try {
        const snapshot = await uploadBytes(storageRef, profile);
        link = await getDownloadURL(snapshot.ref);
      } catch (err) {
        console.log("Error uploading image", err);
      }
  
      const adminCredential = await createUserWithEmailAndPassword(auth,email,password);

      await addDoc(adminCollectionRef, {
        uid:adminCredential.user.uid,
        fname: fname,
        email: email,
        contact: contact,
        password: password,
        profile: link,
        role: role,
      });
      alert("Registration successfull")
      navigate("/login")
    } catch (err) {
      console.log("Error registering admin", err);
    }
  };
  

  return (
    <div className='adminRegistration'>
      <div className='adminRegistrationWrapper'>
      <div className="topSection">
          <div className='banner'>
            <h2>Ngo Connect</h2>
            <span>Connect the world through Ngo Connect</span>
          </div>
        </div>
        <div className='middleSection'>
        <h3 className='heading'>Admin Registration</h3>
        <form onSubmit={handleSubmit}>
        <div className='formWrapper'>
        <label>Full Name</label>
          <input  onChange={(e) => setFname(e.target.value)} className="formInput" type='text'></input>
        </div>
        <div className='formWrapper'>
        <label>Email</label>
          <input  onChange={(e) => setEmail(e.target.value)} className="formInput" type='email'></input>
        </div>
        <div className='formWrapper'>
        <label>Contact Number</label>
          <input  onChange={(e) => setContact(e.target.value)} className="formInput"type='text'></input>
        </div>
        <div className='formWrapper'>
        <label>Password</label>
          <input onChange={(e) => setPassword(e.target.value)} className="formInput" type='text'></input>
        </div>
        <div className='formWrapper'>
        <label>Profile Pic</label>
          <input onChange={(e) => setProfile(e.target.files[0])} className="formInput" type='file'></input>
        </div>
        <div className='registerButtonSection'>
          <button type="submit" className='registerButton'>Register</button>
        </div>
        </form>
        </div>

      </div>
      </div>
   
  )

}
export default AdminRegisteration;