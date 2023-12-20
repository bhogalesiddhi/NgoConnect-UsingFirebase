import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './NgoPortfolio.css';
import volunteer from '../../images/volunteer1.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db ,auth } from '../../firebaseConfig';
import { signOut } from 'firebase/auth';

const NgoPortfolio = () => {
    const [ ngoData , setNgoData ] = useState([]);
    const [projectData , setProjectData] = useState([]);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try{
            await signOut(auth);
            localStorage.removeItem('userInfo');
            alert("LogOut Successfull");
            navigate("/login");
        }catch(err){
            console.log("Error while logging out",err);
        }
    }
    
    const unsubscribe = auth.onAuthStateChanged( async (ngo) => {
        if(ngo){
            const ngoCollectionRef = collection(db,"ngo");
            const qu =query(ngoCollectionRef,where("uid", "==",ngo.uid));
            try{
              const querySnapshot = await getDocs(qu);
              querySnapshot.forEach((doc) => {
                setNgoData({ ...doc.data() , id : doc.id})
              })
            }catch(err){
                console.log(err)
            }
        }else{
            console.log("No ngo Signed in")
        }
    } )
  
    const handleCreateEvents = async (projectId) => {
      navigate(`/${ngoData.id}/${projectId}/createEvent`)

    }

    const viewEvents = async (projectId) => {
      navigate(`/${ngoData.id}/${projectId}/viewEvents`);
    }

    const getProjects = async () => {
        const projectCollectionRef = collection(db, `ngo/${ngoData.id}/projects`);
        try {
          const querySnap = await getDocs(projectCollectionRef);
          const projects = []; // Array to accumulate project data
      
          querySnap.forEach((doc) => {
            // Accumulate project data in the array
            projects.push({ ...doc.data(), id: doc.id });
          });
      
          // Update the state after the loop completes
          setProjectData(projects);
          
        } catch (err) {
          console.log(err);
        }
      };

      useEffect(() => {
        unsubscribe();
        if (ngoData.id) {
          getProjects();
        }
      }, [ngoData.id]);
      

  return (
    <div>
      <Navbar />
      <div className='ngoProfile'>
        <div className='topSection'>
          <div className='topLeft'>
            <img src={ngoData.logoImg} alt='ngoLogo'></img>
          </div>
          <div className='topRight'>
            <div className='ngoName'>
              <h2 className='subtitle'>{ngoData.ngoName}</h2>
            </div>
            <div className='ngoMission'>
              <h4 className='subtitle'>Mission Statement</h4>
              <span>{ngoData.mission}</span>
            </div>
            <div className='ngoLocation'>
              <h4 className='subtitle'>Location</h4>
              <span>{ngoData.location}</span>
            </div>
            <div className='ngoTimings'>
              <h4 className='subtitle'>Timings</h4>
              <span>{ngoData.timings}</span>
            </div>
            <div className='ngoButtons'>
              <Link to={`/createProject/${ngoData.id}`}><button>Create Project</button></Link>
              <button onClick={handleLogout} >Logout</button>
            </div>
          </div>
        </div>
        <div className='hrLine'>
          <hr />
        </div>
        <div className='projectCards'>
  {projectData.map((project) => (
    <div key={project.id} className='card'>
      <img src={project.projectImage} alt='Project' />
      <h3 className='cardTitle'>{project.projectName}</h3>
      <div className='cardDescription'>{project.projectDescription}</div>
      <div className='cardDate'>Date: {project.projectStart} - {project.projectEnd}</div>
      <div className='cardButtons'>
        <button onClick={() => handleCreateEvents(project.id)} >Add Event</button>
        <button onClick={() => viewEvents(project.id)}>View Events</button>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default NgoPortfolio;
