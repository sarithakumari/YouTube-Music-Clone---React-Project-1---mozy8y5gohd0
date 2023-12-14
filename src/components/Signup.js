import React from 'react'
import { Link } from 'react-router-dom';  


export default function Signup() {
  return (
    <div>
      <>
      <div className='signinback'>
        <div className='containersignin'>
            {/* <h3 className='headingsignin'>Sign in</h3> */}
            <div className='box1'>
              <span className='signinimgspan'><img className='signimg' src='\bgyticon.png'/></span>
              <div className='inputsign'>
                <input className='email' type='email' placeholder='Enter Your Username'/><br></br>
                <input className='email' type='email' placeholder='Enter Your Emal ID'/><br></br>
                <input className='email' type='email' placeholder='Enter Your Password'/><br></br>
                <input className='password' type='password' placeholder='Confirm Your Password'/>
              <button className='btn btn-primary'>Sign Up</button>
              <br></br>
         
              <Link to='/Signin'><span className='paraline3'>Already User? Sign In</span></Link>
              <Link to='/'><span className='paraline4'>Go to Homepage</span></Link>

              </div>
            </div>
        </div>
      </div>
      </>
    </div>
  )
}
