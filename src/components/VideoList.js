import React from 'react'
import VideoItem from '../components/VideoItem'
const VideoList=(props)=> {
    const renderedList =props.videos.map((video)=>{
        return <VideoItem key={video.id.videoId} onSelectVideo={props.onSelectVideo} video={video}/>
    })
    return (
        <div className='ui relaxed divided list'>
            {renderedList}
        </div>
    )
}

export default VideoList