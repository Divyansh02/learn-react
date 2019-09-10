import React, { Component } from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from '../components/VideoList'
export default class App extends Component {
    state={
        videos:[]
    }
    onFormSubmit=async term=>{
       const res=await youtube.get('/search',{
            q:term
        })
    this.setState({
        videos:res.data.items
    })
    }

    render() {
        return (
            <div className='ui container'>
                <SearchBar onFormSubmit={this.onFormSubmit}/> 
                <VideoList videos={this.state.videos} />
            </div>
        )
    }
}
