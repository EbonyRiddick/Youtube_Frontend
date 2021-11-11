import React, {Component, useState} from 'react';

const DisplayVideo = (props) => {


    return (
        <React.Fragment>
            <iframe id="ytplayer" type="text/html" width="640" height="360"
            src={`https://www.youtube.com/embed/${props.videoId}?autoplay=1&origin=http://example.com`}
            frameborder="0"></iframe>
        </React.Fragment>
    )
}

export default DisplayVideo