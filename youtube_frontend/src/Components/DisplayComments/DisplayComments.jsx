import React from 'react';

const DisplayComments = (props) => {
    return ( 
        <body>
            {props.comments.map(() => function(comments){
                if (props.comments.videoId == props.videoId){
                    return (
                        <div>
                            <h1>{comments.comment}</h1>
                        </div>
                    )
                }
            })}
        </body>
     );
}
 
export default DisplayComments;