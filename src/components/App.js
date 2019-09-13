import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "../components/VideoList";
import VideoDetails from '../components/VideoDetails'
export default class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({
      videos: response.data.items
    });
    
  };

  onSelectVideo=(video)=>{
    this.setState({
      selectedVideo:video
    })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoDetails video={this.state.selectedVideo}/>
        <VideoList
          videos={this.state.videos}
          onSelectVideo={this.onSelectVideo}
        />
      </div>
    );
  }
}
