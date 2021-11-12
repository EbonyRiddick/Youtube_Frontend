import './App.css';
import {googleAPIKey} from './keys';
import React, {useState, useEffect} from 'react';
import DisplayVideo from './Components/DisplayVideo/DisplayVideo';
import Comments from './Components/Comments/Comments';
import axios from 'axios'
import SearchBar from './Components/SearchBar/SearchBar';
import RecommendedVideos from './Components/RecommendedVideos/RecommendedVideos';

function App() {

  const [videos, setVideos] = useState([]);
  const [videoId, setVideoId] = useState('zdKGJmdL1E4')
  const [thumbnail, setThumbnail]= useState('https://i.ytimg.com/vi/FBtvOJ0tmfw/default.jpg')
  const [relatedVideos, setRelatedVideos] = useState([])

  useEffect(() => {
    
},[videoId])

 const getVideos = async (searchWord) => {
  let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchWord}&key=AIzaSyD-9BfLvsoUjGdn2Hs4Ry7rQ_4Caa1cHsw&part=snippet`)
      console.log(response.data)
      setVideoId(response.data.items[0].id.videoId)
      setVideos(response.data.items)
      getRelatedVideos(response.data.items[0].id.videoId)
      console.log(response.data)
}

const getRelatedVideos = async (videoId) => {
  let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&key=AIzaSyD-9BfLvsoUjGdn2Hs4Ry7rQ_4Caa1cHsw&part=snippet`)
      console.log(response.data)
      setRelatedVideos(response.data.items)
}

const changeVideo = (videoIdPassedIn) => {
  setVideoId(videoIdPassedIn)
}
  
    return (
      <div className="App">
        <DisplayVideo videoId={videoId} />
        <SearchBar getVideos={getVideos} />
        {relatedVideos.length >0 ? 
        <RecommendedVideos relatedVideos={relatedVideos}/>
        :
        null}
      </div>
    );
  }



export default App;
