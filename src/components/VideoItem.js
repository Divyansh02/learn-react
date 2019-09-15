import React from "react";
import '../components/VideoItem.css'
const VideoItem = (props) => {
    // console.log(props)
  return (
    <div onClick={()=>{props.onSelectVideo(props.video)}} className="item video-item">
      <img alt="" className="ui image" src={props.video.snippet.thumbnails.medium.url} />
      <div className="content">
        <div className="content">{props.video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
