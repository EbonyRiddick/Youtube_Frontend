/* eslint-disable jsx-a11y/iframe-has-title */
import React, {Component, useState} from 'react';
import RecommendedVideos from '../RecommendedVideos/RecommendedVideos';

const DisplayVideo = (props) => {
    const [videoId, setVideoId] = useState('zdKGJmdL1E4')

    return (
        <React.Fragment>
            <iframe id="ytplayer" type="text/html" width="640" height="360"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`}
            frameborder="0"></iframe>
            <RecommendedVideos videoId={videoId}/>
        </React.Fragment>
    )
}

export default DisplayVideo