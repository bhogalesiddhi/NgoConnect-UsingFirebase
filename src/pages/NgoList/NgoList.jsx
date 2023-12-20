import { collection, doc, getDocs, query, where } from 'firebase/firestore';
import React, {  useEffect, useState } from 'react'
import { useParams , useNavigate } from 'react-router-dom'
import { db } from '../../firebaseConfig';
import Navbar from '../../components/Navbar/Navbar';
import './NgoList.css'

const NgoList = () => {
    const {category} = useParams();
    const [ngos,setNgos] = useState([]);
    const navigate = useNavigate();

    const handleClick =  (ngoId) => {
      navigate(`/${ngoId}`);
    }

    const fetchNgo = async () => {
        const ngoCollectionRef = collection(db, 'ngo');
        const qu = query(ngoCollectionRef, where('category', '==', category));
      
        try {
          const querySnapShot = await getDocs(qu);
          let ngoList = [];
      
          if (!querySnapShot.empty) {
            querySnapShot.forEach((doc) => {
              ngoList.push({ id: doc.id, ...doc.data() });
              
            });
           
            setNgos(ngoList);
          } else {
            console.log('No documents found for the specified category.');
          }
        } catch (err) {
          console.error('Error loading NGOs:', err);
        }
      };
      

    useEffect(() => {
        fetchNgo();
    },[category])
    
    return <>
    <Navbar />
    <div className='wrapper'>
      {ngos.map((ngo) => (
        <div className="ngo-container" key={ngo.id}>
          <img src={ngo.logoImg} alt="Ngo Logo" className="ngo-logo" />
          <div className="ngo-details">
            <div className="ngo-name">{ngo.ngoName}</div>
            <div className="ngo-description">{ngo.mission}</div>
          </div>
          <button className="view-ngo-btn" onClick={() => handleClick(ngo.id)}>
            View Ngo
          </button>
        </div>
      ))}
    </div>
  </>
  
}

export default NgoList