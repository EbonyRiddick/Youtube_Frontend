import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';


const RecommendedVideos = (props) => {
    

    return (
        <React.Fragment>
        <div> 
            {props.relatedVideos.map(function(video){
                 if(video.snippet == undefined){

                 }
                 else{
                    return (
                        <div>
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