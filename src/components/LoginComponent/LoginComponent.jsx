import React, { useState } from 'react'
import "./LoginComponent.css"
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { fetchUserRole } from '../../functions/userService';
import Cookies from "universal-cookie";
import { userState } from '../../atom/useratom';
import { useRecoilState } from 'recoil';
const cookies = new Cookies();

const LoginComponent = () => {
  
  const navigate = useNavigate();
  
  const [ email,setEmail ] = useState("");
  const [password,setPassword] = useState(""); 
  const [role,setRole] = useState(""); 
  const [currentUser,setCurrentUser]= useRecoilState(userState);
  // const [error,setError] = useState(false);

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const userLoginCredential = await signInWithEmailAndPassword(auth, email, password);
  //     // console.log(userLoginCredential);
  //     alert("Login Successful");
  //     setCurrentUser(userLoginCredential);


  //     const userRole = await fetchUserRole(email);
  
  //     const userInfo = {
  //       uid: userLoginCredential.user.uid,
  //       userEmail: email,
  //       userRole: userRole  
  //     };
  
  //     localStorage.setItem('userInfo', JSON.stringify(userInfo));
  //     cookies.set("auth-cookiee", userLoginCredential.user.uid);
  
  //     setEmail("");
  //     setPassword("");
  //     setRole(userRole);
  //     // console.log("User Role:", userRole);
  
  //     if(userRole === 'admin'){
  //       navigate('/adminDashboard');
  //     }else{
  //       navigate('/')
  //     }
     
  //   } catch (err) {
  //     console.error("Login Error:", err.message); // Log Firebase error message
  //     if (err.code === 'auth/invalid-login-credentials') {
  //       alert("Incorrect Password");
  //     } else {
  //       console.log(err);
  //     }
  //   }
  // };
  
  const handleLogin =async (e) => {
    e.preventDefault();
    try{
      const userLoginCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userLoginCredential.user)
      const userEmail = userLoginCredential?.user?.email;
      const userid = userLoginCredential?.user?.uid;
      const userRole = e.target.elements.role.value;

      alert("Login Successful");
      setCurrentUser({
        "email":userEmail,
        "userid":userid,
        "userRole":userRole
      });
      
      if (role === "admin") {              //can use userRole value
        navigate("/adminDashboard");
      } else {
        navigate("/");
      }

      setEmail("");
      setPassword("");
    }catch(error){
      console.log(error);
    }

  }
  
  // console.log(currentUser);
  return (
    
    <div className='login'>
    <div className='loginWrapper'>

    <div className='loginLeft'>
        <p>Image placeholder</p>
    </div>
    
    <div className='loginRight'>
    <div className='heading'>
    <h3>NgoConnect</h3>
    {/* {error && (<p>Invalid details</p>)} */}
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
                    <option value='user'>user</option>
                    <option value='ngo'>ngo</option>
                    <option value='admin'>admin </option>
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