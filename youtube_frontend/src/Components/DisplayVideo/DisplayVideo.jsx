/* eslint-disable jsx-a11y/iframe-has-title */
import React, {Component, useEffect, useState} from 'react';
import RelatedVideos from '../RelatedVideos/RelatedVideos';
import { googleAPIKey } from '../../keys';
import axios from 'axios';

const DisplayVideo = (props) => {
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()

    useEffect(()=>{
        getTitleDescription()
    },[props.videoId])

    async function getTitleDescription(){
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${props.videoId}&key=${googleAPIKey}&part=snippet,statistics`)
        console.log(response.data)
        setTitle(response.data.items[0].snippet.title)
        setDescription(response.data.items[0].snippet.description)
    }
    

    return (
        <div>
        <React.Fragment>
            <iframe id="ytplayer" type="text/html" width="640" height="360" 
            src={`https://www.youtube.com/embed/${props.videoId}`}
            frameborder="0"></iframe>
            <div>
                <h1>{title}</h1>
                <h1>{description}</h1>
            </div>
        </React.Fragment>
        </div>
    )
}

export default DisplayVideo;