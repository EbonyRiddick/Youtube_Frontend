import React from 'react';



const RelatedVideos = (props) => {
    // const [relatedVideos, setRelatedVideos] = useState(getRelatedVideos)

    // useEffect(()=>{
    //     getRelatedVideos()
    // },[])

    // const getRelatedVideos = async (videoId) => {
    //     let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${props.videoId}&type=video&key=AIzaSyCeijgOGDQ8ntlmkVFcr4ZSh1mCzbSSNAQ&part=snippet&maxResults=5`)
    //         setRelatedVideos(response.data)

    //   }

    return (
        <React.Fragment>
           <div>
               {props.relatedVideos}
           </div>
        </React.Fragment>
    );
}
               
 
export default RelatedVideos;