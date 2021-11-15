import './App.css';
import {googleAPIKey} from './keys';
import React, {useState, useEffect} from 'react';
import DisplayVideo from './Components/DisplayVideo/DisplayVideo';
import Comments from './Components/Comments/Comments';
import axios from 'axios'
import SearchBar from './Components/SearchBar/SearchBar';
import RecommendedVideos from './Components/RecommendedVideos/RecommendedVideos';
import DisplayComments from './Components/DisplayComments/DisplayComments';

function App() {

  const [videos, setVideos] = useState([]);
  const [videoId, setVideoId] = useState('zdKGJmdL1E4')
  const [thumbnail, setThumbnail]= useState('https://i.ytimg.com/vi/FBtvOJ0tmfw/default.jpg')
  const [relatedVideos, setRelatedVideos] = useState([])
  const [descriptions, setDescription] = useState('')
  const [title, setTitle] = useState('')
  const [comments, setComments] = useState([])

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

const getNewVideo = async (videoId) => {
  setVideoId(videoId)
}


const postComments = async (videoId) => {
  let response = await axios.post(`http://127.0.0.1:8000/comments/${videoId}`)
      setComments(...comments, response.data)
      // need whole comment object NOT just video ID.
}
  
    return (
      <div className="App">
        <DisplayVideo videoId={videoId} descriptions={descriptions} title={title} comments={comments} />
        <SearchBar getVideos={getVideos} />
        <RecommendedVideos relatedVideos={relatedVideos} clickMe={getNewVideo}/>
        <Comments postComments={postComments} />
        <DisplayComments comments={comments}/>
      </div>
    );
  }



export default App;
