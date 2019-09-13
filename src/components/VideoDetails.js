import React from "react";

const VideoDetails = props => {
    if(!props.video){
        return <div>Loading....</div>
    }
  return <div>{props.video.snippet.title}</div>;
};

export default VideoDetails;
