import React from 'react'


export default function Newplaylist() {
  return (
    <div>
      <>
      <div className='newback'>
        <div className='containernew'>
            {/* <h3 className='headingsignin'>Sign in</h3> */}
            <div className='box2'>
              <h3 className='newspan'>New Playlist</h3>
              <div className='inputsign2'>
                <input className='email1' type='email' placeholder='Title'/><br></br>
                <hr></hr>
                <br></br>
                <input className='password2' type='password' placeholder='Description'/>
                <hr></hr>
              <button className='btn1'>Create</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button className='btn2'>Cancel</button>

              </div>
            </div>
        </div>
      </div>
      </>
    </div>
  )
}
