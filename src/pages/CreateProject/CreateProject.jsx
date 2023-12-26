import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './CreateProject.css'
import { useParams } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { db, storage } from '../../firebaseConfig';
import { ref, uploadBytes , getDownloadURL } from 'firebase/storage';

const CreateProject = () => {
    const { docId } = useParams();
  
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [image, setImage] = useState('');

  const handleImageChange = (event) => {
    // Handle image selection and set it to state
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission (e.g., send data to backend)
    // Add your logic to handle form data

    try{
      let link;
      const storageRef = ref(storage,`ngoProject/${image.name}`);
      try{
        const snapshot = await uploadBytes(storageRef,image)
        link = await getDownloadURL(snapshot.ref);
      }catch(err){
        console.log("Error uploading image", err);
      }
        const projectCollectionRef = collection(db,`ngo/${docId}/projects`);
        

        const newProject = {
            projectName : projectName,
            projectDescription : description,
            projectStart : startDate,
            projectEnd : endDate,
            projectImage : link
        }

        await addDoc(projectCollectionRef,newProject);
        alert("Project added successfully");
        setProjectName("");
        setDescription("")
        setImage(null)
        setStartDate('');
        setEndDate('');
    }catch(err){
        console.err("Error creating project",err);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="create-project-form">
        <h2>Create Project</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Project Name:</label>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div>
            <label>Start Date:</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label>End Date:</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Image:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            //   required
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProject;
