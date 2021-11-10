import './App.css';
import {googleAPIKey} from './keys';
import React, {useState, useEffect} from 'react';
import DisplayVideo from './Components/DisplayVideo/DisplayVideo';
import Comments from './Components/Comments/Comments';
import axios from 'axios'
import SearchBar from './Components/SearchBar/SearchBar';

function App() {

  useEffect(() => {
    
})

 const filterVideos= async (searchWord)=> {
  let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchWord}&key=AIzaSyCeijgOGDQ8ntlmkVFcr4ZSh1mCzbSSNAQ&part=snippet`)
      // return response.data
      console.log(response.data)
}
  
    return (
      <div className="App">
        <DisplayVideo />
        <SearchBar filteredVideos={filterVideos}/>
      </div>
    );
  }



export default App;
