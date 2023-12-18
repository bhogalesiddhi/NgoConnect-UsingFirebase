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
import { useState } from 'react';
import NgoPortfolio from './pages/NgoPortfolio/NgoPortfolio';
import CreateProject from './pages/CreateProject/CreateProject';
import AddEvent from './pages/AddEvent/AddEvent';
import ViewEvents from './pages/ViewEvents/ViewEvents';
import NgoList from './pages/NgoList/NgoList';
import ViewEventsUserSide from './pages/ViewEventsUserSide/ViewEventsUserSide';
 const cookies = new Cookies();



function App() {
 
  
  

  
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
      <Route path='/userProfile' element={<UserProfile/>}></Route>
      {/* <Route path='/ngoProfile'  element={<NgoProfile/>}/> */}
      <Route path='/ngoPortfolio' element={<NgoPortfolio/>}/>
      <Route path='/createProject/:docId' element={<CreateProject/>}/>
      <Route path='/:ngoId/:projectId/createEvent' element={<AddEvent/>}/>
      <Route path='/:ngoId/:projectId/viewEvents' element={<ViewEvents/>}/>
      <Route path='/ngos/:category' element={<NgoList/>}/>
      <Route path='/:ngoId' element={<NgoProfile/>}/>
      <Route path='/:ngoId/:projectId/checkEvents' element={<ViewEventsUserSide/>}/>

    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
