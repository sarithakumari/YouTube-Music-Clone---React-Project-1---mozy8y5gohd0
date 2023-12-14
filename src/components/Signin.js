import React from 'react'
import { Link } from 'react-router-dom';  
export default function Signin() {
  return (
    <div>
      <>
      <div className='signinback'>
        <div className='containersignin'>
            {/* <h3 className='headingsignin'>Sign in</h3> */}
            <div className='box1'>
              <span className='signinimgspan'><img className='signimg' src='\bgyticon.png'/></span>
              <div className='inputsign'>
                <input className='email' type='email' placeholder='Username'/><br></br>
                <input className='password' type='password' placeholder='Password'/>
              <button className='btn btn-primary'>Sign In</button>
              <br></br>
              <br></br>
              <Link to='/Signup'><p className='paraline'>New User?Create an account</p></Link>
              <br></br>
              <br></br>
              <Link to='/'><p className='paraline2'>Go to Homepage</p></Link>

              </div>
            </div>
        </div>
      </div>
      </>
    </div>
  )
}
