import React, { Component } from "react";
import { connect } from "react-redux";
import {selectSong} from '../actions'
class SongList extends Component {
  renderList() {
    // console.log(this.props)
    return this.props.state.map(song => {
    
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button onClick={()=>{this.props.selectSong(song)}} className="ui button primary">Select</button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}
const mapStateToProps = state => {
    // console.log(state)
  return {
    state: state.songs
  };
};
export default connect(mapStateToProps,{
    selectSong
})(SongList);
