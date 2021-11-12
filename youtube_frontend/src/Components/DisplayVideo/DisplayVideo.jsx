/* eslint-disable jsx-a11y/iframe-has-title */
import React, {Component, useState} from 'react';
import RelatedVideos from '../RelatedVideos/RelatedVideos';


const DisplayVideo = (props) => {
 

    return (
        <React.Fragment>
            <iframe id="ytplayer" type="text/html" width="640" height="360"
            src={`https://www.youtube.com/embed/${props.videoId}`}
            frameborder="0"></iframe>
           
        </React.Fragment>
    )
}

export default DisplayVideo;