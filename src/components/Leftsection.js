import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import RecommendedAlbums from './RecommendedAlbums';

function AudioPlayer({ audioUrl, onClose }) {
  return (
    <div className="audio-player">
      <audio className='audioname' controls autoPlay>
        <source src={audioUrl} type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>
      <span className="close-icon" onClick={onClose}>
        <i class="fa-solid fa-rectangle-xmark"></i>
      </span>
    </div>
  );
}


const Leftsection = () => {

    const [moviesList, setMoviesList] = useState([])
    const [searchItem, setSearchItem] = useState("")
    const [audioUrl, setAudioUrl] = useState('');
    const fetchResponse = async() =>{
        try{
            
        const response = await axios.get('https://academics.newtonschool.co/api/v1/music/song',{
            headers:{
                projectID: "mozy8y5gohd0",
            }
        })
        setMoviesList(response.data.data)
        console.log(response.data.data)
    }catch(err){
        console.log("error in fetching data")
    } }
        useEffect(() =>{
            fetchResponse()
        },[searchItem])
        
        const playAudio = (url) => {
          setAudioUrl(url);
        }
      
        const closeAudio = () => {
          setAudioUrl('');
        }



  return (
    <>
    <div className='flex-container'>
    <div className='main-leftsection'>
      <div>
        <div className='listitem'>
            <a href="#" className="active"><i className="fa-solid fa-house"></i>&nbsp;&nbsp;&nbsp;&nbsp;Home</a>
            <Link to="/Explore"><i className="fa-solid fa-compass"></i>&nbsp;&nbsp;&nbsp;&nbsp;Explore</Link>
            <Link to="/Library"><i className="fa-solid fa-music"></i>&nbsp;&nbsp;&nbsp;&nbsp;Library</Link>
        </div>
        <hr/>
        <div className='btndiv'>
            <Link to="Newplaylist"><button className='button1'><span className='btnspan'><i className="fa-solid fa-plus"></i> New playlist</span></button></Link>
            </div>
            <div className='twosingleblock'>
            <Link to="/LikedMusic">Liked Music <br></br><span className='pinclass'><i className="fa-solid fa-thumbtack"></i> Auto playlist</span></Link>
            <a href="#">Episodes for later<br></br><span className='pinclass'>Auto playlist</span></a>
             
            </div>
        </div>
    </div>
    <div className='div-main'>
      <div className='morebtn'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className='btns'>Excited</button>
      <button className='btns'>Happy</button>
      <button className='btns'>Romantic</button>
      <button className='btns'>Sad</button>
      </div>
      {audioUrl && (
        <AudioPlayer audioUrl={audioUrl} onClose={closeAudio} />
      )}
      <h2 className='feturesong'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Featured Songs</b></h2>
      <div className='mainContentContainerWrapper'>
      <div className='mainContentContainer'>
      {moviesList.map((item, index) => (
        <div key={index} className='Music'>
          <img src={item.thumbnail} alt=''/><i class="fa-solid fa-thumbs-up"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-brands fa-youtube" onClick={() => playAudio(item.audio_url)}></i>
          <Link to='Middlepage' className="link-style"><p className='msicname'>{item.title}</p></Link>
          <p className='artist'>{item.artist[0].name}</p>
          
        </div>
      ))}
    </div>
      </div>
      <div className='recommandedalbums'>
      <RecommendedAlbums />
      </div>
    </div>
    </div>
    </>
  );
};

export default Leftsection;



