import React, { useState } from 'react';
import axios from 'axios'
import SearchResults from '../SearchResults/SearchResults';

const SearchBar = (props) => {

const {handleChange, handleSubmit} = SearchResults(props.filteredVideos);


    return (  
        <div>
            <form onSubmit={handleSubmit}>
                <label>Search</label>
                <input name="searchWord" type="text" onChange={handleChange} placeholder='search...'/>
                <button type='submit'>search</button>
            </form>
        </div>
    );
}
 
export default SearchBar;