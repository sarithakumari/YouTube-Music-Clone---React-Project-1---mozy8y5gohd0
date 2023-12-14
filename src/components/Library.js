import React from 'react'
import { Link } from 'react-router-dom';


export default function Library() {
  return (
    <div className='library-section'>
      <div className='main-leftsection'>
      
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
    <div className='librarypart'>
    <div className='morebtn2'>
      <button className='btns1'>Playlist</button>
      <button className='btns1'>Podcasts</button>
      <button className='btns1'>Songs</button>
      <button className='btns1'>Albums</button>
      <button className='btns1'>Artists</button>
      </div>
      <div className='imgdivlibrary'>
       <img src='\likesc.png' alt='likesc' />
       <Link to="/LikedMusic" className="link-style"><p className='likemusic'>Liked Music</p></Link>
       <p className='autoplylist'><i class="fa-solid fa-thumbtack"></i>&nbsp;&nbsp;Auto Playlist</p>
      </div>
    </div>
    </div>
  )
}
