import React from 'react';
import useForm from '../useForm/useForm';

const SearchBar = (props) => {

    const {formValues, handleChange, handleSubmit} = useForm(props.getVideos);


    return (  
        <div>
            <form onSubmit={handleSubmit}>
                <label>Search</label>
                <input name="searchWord" type="text" onChange={handleChange} value={formValues.searchWord} placeholder='search...'/>
                <button type='submit'>search</button>
            </form>
        </div>
    );
}
 
export default SearchBar;