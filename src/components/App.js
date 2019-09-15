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
      videos: response.data.items,
      selectedVideo:response.data.items[0]
    });
    
  };

  onSelectVideo=(video)=>{
    this.setState({
      selectedVideo:video
    })
  }

  componentDidMount(){
    this.onTermSubmit('buildings')
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
        <VideoDetails video={this.state.selectedVideo}/>
        </div>
        <div className="five wide column">
        <VideoList
          videos={this.state.videos}
          onSelectVideo={this.onSelectVideo}
        />
        </div>
        </div>
        </div>
      </div>
    );
  }
}
