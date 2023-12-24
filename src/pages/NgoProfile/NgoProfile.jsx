import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './NgoProfile.css';
import volunteer from '../../images/volunteer1.jpg';
import {useNavigate, useParams} from 'react-router-dom';
import {db} from '../../firebaseConfig';
import {collection,getDocs, doc,getDoc} from 'firebase/firestore'

const NgoProfile = () => {
  const {ngoId} = useParams();
  const navigate = useNavigate();
  const [ngoInfo , setNgoInfo] = useState({});
  const [ngoProjects,setNgoProjects] = useState([]);

  const fetchNgoDetails = async () => {
    try {
      const docRef = doc(db, 'ngo', ngoId); // Correctly referencing the document in 'ngo' collection using 'doc' function
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setNgoInfo({ id: docSnap.id, ...docSnap.data() });
        console.log(docSnap.data());
      } else {
        console.log('No such document!');
      }
    } catch (err) {
      console.error('Error loading Ngo Info', err);
    }
  };

  const getProjects = async () =>{
    const ngoProjectRef = collection(db,`ngo/${ngoId}/projects`);
    try{
      const querySnap = await getDocs(ngoProjectRef);
     
        let projects = [];
        querySnap.forEach((doc) => {
          projects.push({...doc.data(),id:doc.id});
        })
        setNgoProjects(projects);;
     

    }catch(err){
      console.log("Error Loading Projects",err)
    }
  }

  const viewEvents = (projectId) => {
    navigate(`/${ngoId}/${projectId}/checkEvents`);
  }

  useEffect(() => {
    getProjects();
     fetchNgoDetails();
  },[ngoId])

  return (
    <div>
      <Navbar />
      <div className='ngoProfile'>
        <div className='topSection'>
          <div className='topLeft'>
            <img src={ngoInfo.logoImg} alt='ngoLogo'></img>
          </div>
          <div className='topRight'> 
            <div className='ngoName'>
              <h2 className='subtitle'>{ngoInfo.ngoName}</h2>
            </div>
            <div className='ngoMission'>
              <h4 className='subtitle'>Mission Statement</h4>
              <span>{ngoInfo.mission}</span>
            </div>
            <div className='ngoLocation'>
              <h4 className='subtitle'>Location</h4>
              <span>{ngoInfo.location}</span>
            </div>
            <div className='ngoLocation'>
              <h4 className='subtitle'>Category</h4>
              <span>{ngoInfo.category}</span>
            </div>
            <div className='ngoTimings'>
              <h4 className='subtitle'>Timings</h4>
              <span>{ngoInfo.timings}</span>
            </div>
            <div className='ngoButton'>
              <button>Volunteer</button>
              <button>Donate</button>
            </div>
          </div>
        </div>
        <div className='hrLine'>
          <hr />
        </div>
        <div className='projectCards'>
          {
            ngoProjects.map((project) => (
              <div key ={project.id} className='card'>
            <img src={project.projectImage} alt='Project' />
            <h3>{project.projectName}</h3>
            <div className='cardDescription'>{project.projectDescription}</div>
            <div className='cardDate'>Date : {project.projectStart} - {project.projectEnd}</div>
            <button className='viewEventsButton' onClick={() => viewEvents(project.id)}>View Events</button>
          </div>
            ))
          }
          
          {/* Add more cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default NgoProfile;
