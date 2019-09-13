import React from "react";

const VideoDetails = props => {
    console.log(props.video)
  if (!props.video) {
    return (
      <div>Seacrh anything and Click on any video to display its title</div>
    );
  }

  const videoSrc=`https://www.youtube.com/${props.video.id.videoId}`

  return (
    <div>
        <div className="ui embed">
            <iframe src={videoSrc}/>
        </div>
      <div className="ui segment">
        <h4 className="ui header"> {props.video.snippet.title}</h4>
        <p>{props.video.snippet.description} </p>
      </div>
    </div>
  );
};

export default VideoDetails;
