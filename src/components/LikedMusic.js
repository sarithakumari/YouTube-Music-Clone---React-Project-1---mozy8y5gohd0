import React from 'react'
import { Link } from 'react-router-dom'

export default function LikedMusic() {
  return (
    <div className='likedmusic'>
      <>
      <div className='main-leftsection'>
      <div>
        <div className='listitem'>
            <Link to="/" className="active"><i className="fa-solid fa-house"></i>&nbsp;&nbsp;&nbsp;&nbsp;Home</Link>
            <Link to="/Explore"><i className="fa-solid fa-compass"></i>&nbsp;&nbsp;&nbsp;&nbsp;Explore</Link>
            <Link to="/Library"><i className="fa-solid fa-music"></i>&nbsp;&nbsp;&nbsp;&nbsp;Library</Link>
        </div>
        <hr/>
        <div className='btndiv'>
            <Link to="/Newplaylist"><button className='button1'><span className='btnspan'><i className="fa-solid fa-plus"></i> New playlist</span></button></Link>
            </div>
            <div className='twosingleblock'>
            <Link to="/LikedMusic">Liked Music <br></br><span className='pinclass'><i className="fa-solid fa-thumbtack"></i> Auto playlist</span></Link>
            <a href="#">Episodes for later<br></br><span className='pinclass'>Auto playlist</span></a>
             
            </div>
        </div>
    </div>
    <div className='likeimgbig'>
   <img  src='/likesc2.png'/>
    </div>
    <div className='likemusiccontent'>
    <h2><b>Liked Music</b></h2>
    <br></br>
    <br></br>
    <p>Auto playlist</p>
    <p>songs</p>
    <p>Music you like in any YouTube app will show here. You can change this in Settings</p>
    </div>
      </>
    </div>
  )
}
