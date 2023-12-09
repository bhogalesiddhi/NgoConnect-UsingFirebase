import React from 'react'
import "./UserRegistration.css"

const UserRegisteration = () => {
  return (
    <div className="userRegistration">
      <div className="userRegistrationWrapper">
        <div className="topSection">
          <div className='banner'>
            <h2>Ngo Connect</h2>
            <span>Connect the world through Ngo Connect</span>
          </div>
        </div>
  
        <div className='bottomSection'>
        <div className='heading'>
        <h3>User Registeration</h3>
        </div>
          <div className='bottomSectionLeft'>
          <div className='formWrapperLeft'>
            <label>Full Name  </label>
            <input type='text' placeholder='' className='formInput'></input>
          </div>
          <div className='formWrapperLeft'>
            <label>Email </label>
            <input type='email' placeholder='' className='formInput'></input>
          </div>
          <div className='formWrapperLeft'>
            <label> Password </label>
            <input type='text' placeholder='' className='formInput'></input>
          </div>
          <div className='formWrapperLeft'>
            <label> Contact Number </label>
            <input type='text' placeholder='' className='formInput'></input>
          </div>
          <div className='formWrapperLeft'>
            <label> Location </label>
            <input type='text' placeholder='' className='formInput'></input>
          </div>
          <div className='formWrapperLeft'>
            <label> Profile Pic </label>
            <input type='file' placeholder='' className='formInput'></input>
          </div>
          
          </div> 
          <div className='registerButtonSection'>
            <button className='registerButton'>Register</button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default UserRegisteration