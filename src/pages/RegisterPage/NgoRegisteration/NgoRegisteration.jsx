import React from 'react'
import './NgoRegisteration.css'

const NgoRegisteration = () => {
  return (
    <div className="ngoRegistration">
    <div className="ngoRegistrationWrapper">
      <div className="topSection">
        <div className='banner'>
          <h2>Ngo Connect</h2>
          <span>Connect the world through Ngo Connect</span>
        </div>
      </div>

      <div className='bottomSection'>
      <div className='heading'>
      <h3>Ngo Registeration</h3>
      </div>
        <div className='bottomSectionLeft'>
        <div className='formWrapperLeft'>
          <label>Organisation Name  </label>
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
        <label >Category</label>
                  <select className='formInput' name='category' id='category'>
                    <option value='nature'>Nature</option>
                    <option value='ngo'>Food</option>
                    <option value='social-cause'>Social Cause</option>
                  </select>
        </div>
        <div className='formWrapperLeft'>
          <label> Ngo Logo </label>
          <input type='file' placeholder='' className='formInput'></input>
        </div>
        <div className='formWrapperLeft'>
          <label> Ngo Certificate </label>
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

export default NgoRegisteration