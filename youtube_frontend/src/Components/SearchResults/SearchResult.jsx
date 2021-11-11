import React from 'react';


const SearchResult = (props) => {
    return (
        <div> 
         {props.videos.map(function(video){
                return (
                    <h1>{`https://www.youtube.com/embed/${video.items[2].videoId}?autoplay=1&origin=http://example.com`}
                    </h1>
                )
            })
        } 
        </div>
        );
}
 
export default SearchResult;