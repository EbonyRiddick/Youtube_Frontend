import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';


const RecommendedVideos = (props) => {
    const [videos, setVideos] = useState()

    useEffect(()=>{
        getRelatedVideos()
    },[])

    const getRelatedVideos = async (videoId) => {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${props.videoId}&type=video&key=AIzaSyCeijgOGDQ8ntlmkVFcr4ZSh1mCzbSSNAQ&part=snippet&maxResults=5`)
            setVideos(response.data)

      }

    return (
        <React.Fragment>
        <div> 
            {console.log(videos)}
                {/* <img src={videos.items[3].snippet.thumbnails.default.url}/> */}
                   
        </div>
        </React.Fragment>
    );
}
               
 
export default RecommendedVideos;