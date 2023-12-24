import React, { useState } from 'react'
import './NgoRegisteration.css'
import { auth , db , storage} from '../../../firebaseConfig';
import { collection , addDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { createUserWithEmailAndPassword } from 'firebase/auth';


const NgoRegisteration = () => {
  const [ ngoName , setNgoName] = useState("");
  const [ email , setEmail ] = useState("");
  const [password,setPassword] = useState("");
  const [ contact ,setContact] = useState("");
  const [mission , setMission] = useState("");
  const [ location , setLocation] = useState("");
  const [timings , setTimings] = useState("");
  const [logo , setLogo] = useState(null);
  const[certi , setCerti] = useState(null);
  const[role,setRole] = useState("ngo");
  const[category,setCategory] = useState("other");

  const ngoCollectionRef = collection(db,"ngo");

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{

       let logoLink;
       let certiLink;
       const ngoLogoStorageRef = ref(storage,`ngoLogo/${logo.name}`);
       const ngoCertificateRef = ref(storage,`ngoCertificate/${certi.name}`);
       try{
        await uploadBytes(ngoLogoStorageRef,logo).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            logoLink = url;
          })
        })

        await uploadBytes(ngoCertificateRef,certi).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            certiLink = url;
          })
        })

       }catch(err){
        console.log("Error uploading",err);
       }

       const ngoCredentials = await createUserWithEmailAndPassword(auth,email,password)

       await addDoc(ngoCollectionRef,{
        uid : ngoCredentials.user.uid,
        ngoName:ngoName,
        email:email,
        password : password,
        mission : mission,
        contactNo : contact,
        location:location,
        timings:timings,
        category:category,
        role:role,
        logoImg : logoLink,
        certiImg : certiLink,
         

      })

      alert("Registration Successfull");
    

    }catch(err){
      console.log("Error registering",err);
    }
    


  }

  return (
    <div className="ngoRegistration">
    <div className="ngoRegistrationWrapper">
      <div className="topSection">
        <div className='banner'>
          <h2>Ngo Connect</h2>
          <span>Connect the world through Ngo Connect</span>
        </div>
      </div>

      <div className='bottomSection'>
      <div className=''>
      <h3 className='heading'>Ngo Registeration</h3>
      </div>
        <div className='bottomSectionLeft'>
        <form onSubmit={handleSubmit}>
        <div className='formWrapperLeft'>
          <label>Organisation Name  </label>
          <input type='text' placeholder='' onChange={(e) => setNgoName(e.target.value)} className='formInput'></input>
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
        <div className='formWrapperLeft textAreaSection'>
          <label > Mission Statement </label>
          <textarea id="missionStatment"  onChange={(e) => setMission(e.target.value)} className='formInput'></textarea>
        </div>
        <div className='formWrapperLeft'>
          <label> Location </label>
          <input type='text' placeholder='' onChange={(e) => setLocation(e.target.value)} className='formInput'></input>
        </div>
        <div className='formWrapperLeft'>
          <label> Timings </label>
          <input type='text' placeholder='' onChange={(e) => setTimings(e.target.value)} className='formInput'></input>
        </div>
        <div className='formWrapperLeft'>
        <label >Category</label>
                  <select className='formInput' name='category' onChange={(e) => setCategory(e.target.value)} value={category} id='category'>
                    <option value='Education'>Education</option>
                    <option value='Environment'>Environment</option>
                    <option value='HumanRights'>Human Rights</option>
                    <option value='Health'>Health</option>
                    <option value='AnimalWelfare'>Animal Welfare</option>
                  </select>
        </div>
        <div className='formWrapperLeft'> 
          <label> Ngo Logo </label>
          <input type='file'  onChange={(e) => setLogo(e.target.files[0])} placeholder='' className='formInput'></input>
        </div>
        <div className='formWrapperLeft'>
          <label> Ngo Certificate </label>
          <input type='file' onChange={(e) => setCerti(e.target.files[0])} placeholder='' className='formInput'></input>
        </div>
        <div className='registerButtonSection'>
          <button  type="submit" className='registerButton'>Register</button>
        </div>
        </form>
        
        </div> 
        
      </div>
      
    </div>
  </div>
  )
}

export default NgoRegisteration