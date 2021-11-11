import React from 'react';


const RecommendedVideos = (props) => {
    return (
        <div> 
            {props.getRelatedVideos.map(function(video){
                return (
                   <h1>{video.videoId}</h1>
                    )
                })
            } 
        </div>
    );
}
               
 
export default RecommendedVideos;