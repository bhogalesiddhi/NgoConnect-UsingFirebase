import React, { useState } from 'react'
import "./LoginComponent.css"
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { fetchUserRole } from '../../functions/userService';
import Cookies from "universal-cookie";
const cookies = new Cookies();

const LoginComponent = ({setIsAuth}) => {
  
  const navigate = useNavigate();
  
  const [ email,setEmail ] = useState("");
  const [password,setPassword] = useState(""); 
  const [role,setRole] = useState(""); 

  const handleLogin = async (e) => {
    e.preventDefault();
    try{
      const userLoginCredential = await signInWithEmailAndPassword(auth,email,password);
      console.log(userLoginCredential)
      alert("Login Successfull");

      
      //fetch the user's role
      const userRole = await fetchUserRole(email);

      const userInfo = {
        uid : userLoginCredential.user.uid,
        userEmail : email,
        userRole:userRole
      }

      localStorage.setItem('userInfo',JSON.stringify(userInfo));
      cookies.set("auth-cookiee", userLoginCredential.user.uid);
      
      setEmail("");
      setPassword("");
      setRole(userRole);
      navigate("/")
    }catch(err){
      if(err.code === 'auth/invalid-login-credentials')
      {
        console.log(err.code);
      alert("Incorrect Password");
      }else{
        console.log(err);
      }
    }
  }

  return (
    
    <div className='login'>
    <div className='loginWrapper'>

    <div className='loginLeft'>
        <p>Image placeholder</p>
    </div>
    
    <div className='loginRight'>
    <div className='heading'>
    <h3>NgoConnect</h3>
    </div>
        
        <div className='loginBox'>
        <form onSubmit={handleLogin}>
            <div className='formWrapper'>
            <input type='text' onChange={(e) => setEmail(e.target.value)} placeholder='Email id' className='loginInput' />
            </div>
            <div className='formWrapper'>
            <input type='text' onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='loginInput' />
            </div>
            <div className='formWrapper selectSection' >
            <label >Choose your role :</label>
                  <select value={role} onChange={(e) => setRole(e.target.value)} name='role' id='role'>
                    <option value='User'>user</option>
                    <option value='Ngo'>ngo</option>
                    <option value='Admin'>admin </option>
                  </select>
            </div>
            <div className='formWrapper'>
            <button type="submit" className='loginButton'>Login</button>
            </div>
            
        </form>
        

        <div className='loginBottom'>
            <p> Dont have  an account ?</p>
            <div className='registerSection'>
            <p className=''>Register as</p>
            <div className='registerOption'>
            <p> <Link to='/register/ngo'>Ngo</Link> </p>
            <p> <Link to='/register/user'>User</Link> </p>
            <p> <Link to='/register/admin'>Admin</Link> </p>
            </div>
            </div>
        </div>

        </div>
    </div>
       
    </div>

    </div>
    
  )
}

export default LoginComponent