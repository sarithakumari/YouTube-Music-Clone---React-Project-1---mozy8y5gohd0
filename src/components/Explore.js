import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ExploreAlbum from './ExploreAlbum';

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
  

export default function Explore() {
    const [moviesList, setMoviesList] = useState([])
    const [searchItem, setSearchItem] = useState("")
    const [searchResults, setSearchResults] = useState([]);
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
    <div className='Explore-main'>
      <>
      <div className='main-leftsection'>
      <div>
        <div className='listitem'>
            <Link to="/" className="active"><i className="fa-solid fa-house"></i>&nbsp;&nbsp;&nbsp;&nbsp;Home</Link>
            <Link to="/"><i className="fa-solid fa-compass"></i>&nbsp;&nbsp;&nbsp;&nbsp;Explore</Link>
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
    {audioUrl && (
    <AudioPlayer audioUrl={audioUrl} onClose={closeAudio} />
  )}
    <div className='ExploreContainer'>
    <div className='mainContentContainer1'>
    {moviesList.map((item, index) => (
    <div key={index} className='Music1'>
        <img src={item.thumbnail} /><i class="fa-solid fa-thumbs-up"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-brands fa-youtube" onClick={() => playAudio(item.audio_url)}></i>
    <p className='msicname1'>{item.title}</p>
    <p className='artist'>{item.artist[0].name}</p>
    </div>
       ))}
    </div>
    <ExploreAlbum/>
</div>
   
      </>
    </div>
  )
}
