import React from 'react';

const VideoDetail = ({ video }) => {
    if(!video){
        return <div>Loading ...</div>
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${ videoId }` 

    return(
        <div className='video-details col-lg-7 col-md-8 col-sm-12'>
            <div className='embed-responsive embed-responsive-16by9'>
                <iframe className='embed-responsive-item' src={url}></iframe>
            </div>
            <div className='details'>
                <div className='videoTitle'>{ video.snippet.title }</div>
                <hr/>
                <div>{ video.snippet.description }</div>
            </div>
        </div>
    );
};

export default VideoDetail;