import './App.css';
import {googleAPIKey} from './keys';
import React, {useState, useEffect} from 'react';
import DisplayVideo from './Components/DisplayVideo/DisplayVideo';
import Comments from './Components/Comments/Comments';
import axios from 'axios'
import SearchBar from './Components/SearchBar/SearchBar';

function App() {

  const [videos, setVideos] = useState([]);
  const [videoId, setVideoId] = useState('zdKGJmdL1E4')

  useEffect(() => {
    
})

 const getVideos = async (searchWord) => {
  let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchWord}&key=AIzaSyCeijgOGDQ8ntlmkVFcr4ZSh1mCzbSSNAQ&part=snippet`)
      console.log(response.data)
      setVideos(response.data.items)
      setVideoId(response.data.items[0].id.videoId)
      console.log(response.data)
}

const changeVideo = (videoIdPassedIn) => {
  setVideoId(videoIdPassedIn)
}
  
    return (
      <div className="App">
        <DisplayVideo videoId={videoId} />
        <SearchBar getVideos={getVideos} />
      </div>
    );
  }



export default App;
