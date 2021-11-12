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
  const [descriptions, setDescription] = useState('')
  const [title, setTitle] = useState('')

  useEffect(() => {
    
},[videoId])

 const getVideos = async (searchWord) => {
  let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchWord}&key=${googleAPIKey}&part=snippet`)
      console.log(response.data)
      setVideoId(response.data.items[0].id.videoId)
      setVideos(response.data.items)
      setDescription(response.data.items[0].snippet.description)
      setTitle(response.data.items[0].snippet.title)
      getRelatedVideos(response.data.items[0].id.videoId)
      console.log(response.data)
}

const getRelatedVideos = async (videoId) => {
  let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&key=${googleAPIKey}&part=snippet`)
      console.log(response.data)
      setRelatedVideos(response.data.items)
}
  
    return (
      <div className="App">
        <DisplayVideo videoId={videoId} descriptions={descriptions} title={title}/>
        <SearchBar getVideos={getVideos} />
        <RecommendedVideos relatedVideos={relatedVideos} clickMe={setVideoId}/>
      </div>
    );
  }



export default App;
