import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ExploreAlbum() {
    const [albumList, setAlbumList] = useState([])
    const [searchItems, setSearchItem] = useState("")
    const [searchResults, setSearchResults] = useState([]);
    const fetchResponsee = async() =>{
        try{
            
        const response1 = await axios.get('https://academics.newtonschool.co/api/v1/music/album?limit=100',{
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
      <div className='Album-explore'>
  {albumList.map((item, index) => (
    <div className='Music1' key={index}>
      <img src={item.image} alt={item.title} /><i class="fa-solid fa-thumbs-up"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-brands fa-youtube"></i>
      <p className='msicname1'>{item.title}</p>
      <p className='artist'>{item.name}</p>
    </div>
  ))}
</div>
      </>
    </div>
  )
}
