import React from 'react'
import "./LoginComponent.css"
import { Link } from 'react-router-dom'

const LoginComponent = () => {
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
        <form>
            <div className='formWrapper'>
            <input type='text' placeholder='Email id' className='loginInput' />
            </div>
            <div className='formWrapper'>
            <input type='text' placeholder='Password' className='loginInput' />
            </div>
            <div className='formWrapper selectSection' >
            <label >Choose your role :</label>
                  <select name='role' id='role'>
                    <option value='User'>User</option>
                    <option value='Ngo'>Ngo</option>
                    <option value='Admin'>Admin </option>
                  </select>
            </div>
            <div className='formWrapper'>
            <button className='loginButton'>Login</button>
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