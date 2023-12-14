import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function RecommendedAlbums() {
    const [albumList, setAlbumList] = useState([])
    const [searchItems, setSearchItem] = useState("")
    const [searchResults, setSearchResults] = useState([]);
    const fetchResponsee = async() =>{
        try{
            
        const response1 = await axios.get('https://academics.newtonschool.co/api/v1/music/album',{
            headers:{
                projectID: "mozy8y5gohd0",
            }
        })
        setAlbumList(response1.data.data)
        console.log(response1.data.data)
    }catch(err){
        console.log("error in fetching data")
    } }
        useEffect(() =>{
            fetchResponsee()
        },[searchItems])
  return (
    <div>
      <>
      <h2 className='feturesong'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Recommended Albums</b></h2>
      <div className='mainContentContainerWrapper'>
      <div className='mainContentContainer'>
      {albumList.map((item, index) => (
        <div key={index} className='Music'>
          <img src={item.image} alt=''/><i class="fa-solid fa-thumbs-up"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <p className='msicname'>{item.title}</p>
          <p className='artist'>{item.name}</p>
          
        </div>
      ))}
    </div>
      </div>
      </>
    </div>
  )
}
