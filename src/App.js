import './App.css';
import { BrowserRouter  ,Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import Homepage from './pages/Homepage/Homepage';
import UserRegisteration from './pages/RegisterPage/UserRegisteration/UserRegisteration';
import NgoRegisteration from './pages/RegisterPage/NgoRegisteration/NgoRegisteration';
import AdminRegisteration from './pages/RegisterPage/AdminRegisteration/AdminRegisteration';
import NgoCategory from './pages/NgoCategory/NgoCategory';
import UserProfile from './pages/UserProfile/UserProfile';
import NgoProfile from './pages/NgoProfile/NgoProfile';




function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/' element={<Homepage/>} />
      <Route path='/register/user' element={<UserRegisteration/>}></Route>
      <Route path='/register/ngo' element={<NgoRegisteration/>}></Route>
      <Route path='/register/admin' element={<AdminRegisteration/>}></Route>
      <Route path='/ngoCategory' element={<NgoCategory/>}/>
      <Route path='/userProfile' element={<UserProfile/>}></Route>
      <Route path='/ngoProfile'  element={<NgoProfile/>}/>
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
