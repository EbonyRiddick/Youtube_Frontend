import './App.css';
import {googleAPIKey} from './keys';
import React, {useState, useEffect} from 'react';
import DisplayVideo from './Components/DisplayVideo/DisplayVideo';
import Comments from './Components/Comments/Comments';
import axios from 'axios'
import SearchBar from './Components/SearchBar/SearchBar';

function App() {

  useEffect(() => {
    
    console.log(googleAPIKey);
})

  
    return (
      <div className="App">
        <DisplayVideo />
        <SearchBar />
      </div>
    );
  }



export default App;
