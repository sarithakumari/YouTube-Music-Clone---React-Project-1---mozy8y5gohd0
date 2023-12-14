import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='main-nav'>
      <h2 style={{ margin: '4px' }}><span className='nav-span'><i className="fa-solid fa-bars"><Link to='/'><img width={'120px'} src='/youtubemusic logo.png'></img></Link></i></span>
        <span className='searchbox'>
          
          <input className='searchinput' type='search' placeholder='Search songs,albums,artists,podcasts' />
          <button className='btn'><i className="fa-solid fa-magnifying-glass"></i></button>
        </span>
        <span className='righnav'>&nbsp;&nbsp;

          <div className="dropdown"><i className="fa-solid fa-window-restore"></i>
            <div className="dropdown-content">
              <Link to="/Subscription"><i className="fa-brands fa-youtube"></i>&nbsp;&nbsp;&nbsp;Subscriptions</Link>
              <Link to="/Termspolicy"><i className="fa-solid fa-shield-halved"></i>&nbsp;&nbsp;&nbsp;Terms and Privasy Policy</Link>
            </div>
          </div>

          &nbsp;&nbsp;&nbsp;&nbsp;<Link to='/Signin'><button className='signinbtn'>Sign in</button></Link></span>
      </h2>

    </div>

  );
};

export default Navbar;
