import React from 'react'
import './AdminRegisteration.css'

const AdminRegisteration = () => {
  return (
    <div className='adminRegistration'>
      <div className='adminRegistrationWrapper'>
      <div className="topSection">
          <div className='banner'>
            <h2>Ngo Connect</h2>
            <span>Connect the world through Ngo Connect</span>
          </div>
        </div>
        <div className='middleSection'>
        <h3 className='heading'>Admin Registration</h3>
        <div className='formWrapper'>
        <label>Full Name</label>
          <input  className="formInput" type='text'></input>
        </div>
        <div className='formWrapper'>
        <label>Email</label>
          <input  className="formInput" type='email'></input>
        </div>
        <div className='formWrapper'>
        <label>Contact Number</label>
          <input  className="formInput"type='text'></input>
        </div>
        <div className='formWrapper'>
        <label>Password</label>
          <input className="formInput" type='text'></input>
        </div>
        <div className='formWrapper'>
        <label>Profile Pic</label>
          <input className="formInput" type='file'></input>
        </div>
        <div className='registerButtonSection'>
          <button className='registerButton'>Register</button>
        </div>
        </div>

      </div>
      </div>
   
  )
}

export default AdminRegisteration