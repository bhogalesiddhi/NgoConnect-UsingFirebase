import './App.css';
import { BrowserRouter  ,Navigate,Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import Homepage from './pages/Homepage/Homepage';
import UserRegisteration from './pages/RegisterPage/UserRegisteration/UserRegisteration';
import NgoRegisteration from './pages/RegisterPage/NgoRegisteration/NgoRegisteration';
import AdminRegisteration from './pages/RegisterPage/AdminRegisteration/AdminRegisteration';
import NgoCategory from './pages/NgoCategory/NgoCategory';
import UserProfile from './pages/UserProfile/UserProfile';
import NgoProfile from './pages/NgoProfile/NgoProfile';
import Cookies from 'universal-cookie';
import { useEffect, useState } from 'react';
import NgoPortfolio from './pages/NgoPortfolio/NgoPortfolio';
import CreateProject from './pages/CreateProject/CreateProject';
import AddEvent from './pages/AddEvent/AddEvent';
import ViewEvents from './pages/ViewEvents/ViewEvents';
import NgoList from './pages/NgoList/NgoList';
import ViewEventsUserSide from './pages/ViewEventsUserSide/ViewEventsUserSide';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import AdminProfile from './pages/AdminProfile/AdminProfile';
import ViewNgoAdmin from './pages/ViewNgoAdmin/ViewNgoAdmin';
import { userState } from './atom/useratom';
import { useRecoilState } from 'recoil';
import VolunteerForm from './pages/VolunteerForm/VolunteerForm';
import VolunteerList from './pages/VoulnteerList/VolunteerList';


 const cookies = new Cookies();
 



function App() {
  const [currentUser]= useRecoilState(userState);
  const role = currentUser?.userRole;

  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path='/login' element={<LoginPage  />}/>
      <Route path='/' element={ <Homepage/>} />
      <Route path='/register/user' element={<UserRegisteration/>}></Route>
      <Route path='/register/ngo' element={<NgoRegisteration/>}></Route>
      <Route path='/register/admin' element={<AdminRegisteration/>}></Route>


      <Route path='/ngoCategory' element={<NgoCategory/>}/>
      <Route path='/userProfile' element={role==="user" ?(<UserProfile/>) : (<LoginPage/>)}></Route>
      <Route path='/ngoProfile'  element={role==="ngo" ?(<NgoProfile/>): (<LoginPage/>)}/>
      <Route path='/ngoPortfolio' element={<NgoPortfolio/>}/>
      
      <Route path='/createProject/:docId' element={<CreateProject/>}/>
      <Route path='/:ngoId/:projectId/createEvent' element={<AddEvent/>}/>
      <Route path='/:ngoId/:projectId/viewEvents' element={<ViewEvents/>}/>
      <Route path='/ngos/:category' element={currentUser?(<NgoList/>):(<LoginPage/>)}/>
      <Route path='/:ngoId' element={<NgoProfile/>}/>
      <Route path='/:ngoId/:projectId/checkEvents' element={<ViewEventsUserSide/>}/>
      <Route path='/adminDashboard' element={<AdminDashboard/>}/>
      <Route path='/adminProfile' element={<AdminProfile/>}/>
      <Route path='/admin/:ngoId' element={<ViewNgoAdmin/>}/>
      <Route path='/:ngoId/:projectId/:eventId/form' element={<VolunteerForm/>}/>
      <Route path='/:ngoId/:projectId/:eventId/volunteerList' element={<VolunteerList/>}/>
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
