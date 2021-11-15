import React from 'react';



const RecommendedVideos = (props) => {
    

    return (
        <React.Fragment>
        <div> 
            {props.relatedVideos.map(function(video){
                 if(video.snippet == undefined){

                 }
                 else{
                    return (
                        <div onClick={() => props.clickMe(video.id.videoId)}>
                            <img src={video.snippet.thumbnails.default.url} />
                            <h1 >{video.snippet.title}</h1>
                        </div>
                        
                    )
                 }
               
            })}                   
        </div>
        </React.Fragment>
    );
}
               
 
export default RecommendedVideos;