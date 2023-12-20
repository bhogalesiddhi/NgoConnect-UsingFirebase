import React, { useEffect, useState } from 'react';
import { collection, deleteDoc, doc, getDoc, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../../firebaseConfig';
// import Navbar from '../../components/Navbar/Navbar';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [ngos, setNgos] = useState([]);
  
  const navigate = useNavigate();
  const ngoCollectionRef = collection(db, 'ngo');
 

  useEffect(() => {
   const unsubscribe = onSnapshot(ngoCollectionRef,(snapShot) => {
    let ngoList = [];
    snapShot.docs.forEach((doc) => {
      ngoList.push({id:doc.id,...doc.data()})
    })
    setNgos(ngoList);
   })

   return () => {
    unsubscribe();
   }
   
  }, []);

  const handleViewNgo = (ngoId) =>{
    navigate(`/admin/${ngoId}`)
  }

  const handleDelete = async (ngoId) => {
    const obj ={};
    try {
      const docRef = doc(db, 'ngo', ngoId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
       
        obj.email = docSnap.data().email;
        obj.password = docSnap.data().password;
      } else {
        console.log('No such document!');
      }
      await signInWithEmailAndPassword(auth,obj.email, obj.password);
      const currentUser = auth.currentUser;
      if (currentUser) {
        await currentUser.delete();
        console.log('User deleted successfully');
        
         await deleteDoc(docRef);
      
      } else {
        throw new Error('No user is currently signed in');
      }
    } catch (err) {
      console.error('Error loading Ngo Info', err);
    }
    
    
  };

  const handleViewProfile = () => {
    // Redirect to admin profile page
    navigate('/adminProfile');
  };

  return (
    <>
      
      <div className="wrapper">
        {ngos.map((ngo) => (
          <div className="ngo-container" key={ngo.id}>
            <img src={ngo.logoImg} alt="Ngo Logo" className="ngo-logo" />
            <div className="ngo-details">
              <div className="ngo-name">{ngo.ngoName}</div>
              <div className="ngo-description">{ngo.mission}</div>
            </div>
            <div className="button-group">
              <button className="view-ngo-btn" onClick={() => handleViewNgo(ngo.id)}>
                View Ngo
              </button>
              <button
                className="delete-ngo-btn"
                onClick={() => handleDelete(ngo.id)}
              >
                Delete Ngo
              </button>
            </div>
          </div>
        ))}
        <div className="profile-button">
          <button className="profile-btn" onClick={handleViewProfile}>
            Profile
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
