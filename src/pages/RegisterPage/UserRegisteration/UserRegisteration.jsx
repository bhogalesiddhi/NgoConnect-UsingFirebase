import React, { useState } from 'react'
import "./UserRegistration.css"
import { db,storage } from '../../../firebaseConfig';
import { auth } from '../../../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { createUserWithEmailAndPassword } from "firebase/auth";


const UserRegisteration = () => {
  const [fname , setFname] = useState("");
  const [email , setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [contact,setContact] = useState("");
  const [location,setLocation] = useState("");
  const [role,setRole]=useState("user");
  const [profilePic , setProfilePic] = useState(null); 
  const [imageUrl , setimageUrl] = useState("")

  const usersRef = collection(db,"users");

  const handleSubmit = async (e) => {
    e.preventDefault();
     try{

      let link;
      const storageRef = ref( storage ,`userProfile/${profilePic.name}`);
      try{
        await uploadBytes(storageRef,profilePic).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
               setimageUrl(url);
               link = url;
          })
        });
      }catch(err){
        console.log(" Error uploading image",err);
      }
      const userCredential = await createUserWithEmailAndPassword(auth,email,password);

      await addDoc(usersRef,{
        uid : userCredential.user.uid,
        fullName : fname,
        email:email,
        password : password,
        contactNo : contact,
        location:location,
        role:role,
        profileImg : link
      })


     }catch(err){
      console.log(err);
     }
  }

  return (
    <div className="userRegistration">
      <div className="userRegistrationWrapper">
        <div className="topSection">
          <div className='banner'>
            <h2>Ngo Connect</h2>
            <span>Connect the world through Ngo Connect</span>
          </div>
        </div>
  
        <div className='bottomSection'>
        <div className='heading'>
        <h3>User Registeration</h3>
        </div>
          <div className='bottomSectionLeft'>
          <>
            <form onSubmit={handleSubmit}>
            <div className='formWrapperLeft'>
            <label>Full Name  </label>
            <input type='text' placeholder='' onChange={(e) => setFname(e.target.value)} className='formInput'></input>
          </div>
          <div className='formWrapperLeft'>
            <label>Email </label>
            <input type='email' placeholder='' onChange={(e) => setEmail(e.target.value)} className='formInput'></input>
          </div>
          <div className='formWrapperLeft'>
            <label> Password </label>
            <input type='text' placeholder='' onChange={(e) => setPassword(e.target.value)} className='formInput'></input>
          </div>
          <div className='formWrapperLeft'>
            <label> Contact Number </label>
            <input type='text' placeholder='' onChange={(e) => setContact(e.target.value)} className='formInput'></input>
          </div>
          <div className='formWrapperLeft'>
            <label> Location </label>
            <input type='text' placeholder='' onChange={(e) => setLocation(e.target.value)} className='formInput'></input>
          </div>
          <div className='formWrapperLeft'>
            <label> Profile Pic </label>
            <input type='file' placeholder='' onChange={(e) => setProfilePic(e.target.files[0])} className='formInput'></input>
          </div>
          <div className='registerButtonSection'>
            <button  type="submit" className='registerButton'>Register</button>
          </div>
          
            </form>

          </>
          </div> 
          
        </div>
        
      </div>
    </div>
  )
}

export default UserRegisteration