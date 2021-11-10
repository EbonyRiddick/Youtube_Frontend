import React, { useState } from 'react';
import axios from 'axios'

const SearchBar = () => {
const [searchWord, setSearchWord] = useState('')

async function filterVideos() {
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchWord}&key=AIzaSyCeijgOGDQ8ntlmkVFcr4ZSh1mCzbSSNAQ`)
        // return response.data
        console.log(response.data)
  }

    return (  
        <div>
            <form className="form">
                <label>Search</label>
                <input name="searchWord" type="text" onChange={searchWord}  placeholder='search...'/>
                <button onClick={() => setSearchWord(searchWord)}>search</button>
            </form>
        </div>
    );
}
 
export default SearchBar;