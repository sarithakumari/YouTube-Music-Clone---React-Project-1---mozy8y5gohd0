import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Middlepage() {
  const [moviesList, setMoviesList] = useState([])
    const [searchItem, setSearchItem] = useState("")
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
        const firstMovie = moviesList.length > 0 ? moviesList[0] : null;
  return (
    <div className='Middle-Main'>
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

    <div className='middleimgpart'>
    {firstMovie && <img src={firstMovie.thumbnail} />}
          </div>
          <div className='decription'>
            {firstMovie && (
              <>
                <h2><b>{firstMovie.title}</b></h2>
                <br></br>
                <p>Artist: {firstMovie.artist[1].name}</p>
                <p>{firstMovie.artist[1].description}</p>
              </>
            )}
    </div>
      </>
    </div>
  )
}



