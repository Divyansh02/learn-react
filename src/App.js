import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Lifecycle from './components/Lifecycle'
import Clock from './components/Clock'
import SearchBar from './components/SearchBar'
import unsplash from './api/unsplash'
// import ImageList from './components/ImageList'
class App extends React.Component {
  state={images:''}
   onSearchSubmit=async(term)=>{
   const response= await unsplash.get('https://api.unsplash.com/search/photos',{
    params:{query:term},
    })
    this.setState({
      images:response.data.results
    })
  };

  render(){
  return (
    <div className="App ui container " style={{marginTop:'10px'}}>
      <SearchBar onSubmit={this.onSearchSubmit}/>
      {/* <ImageList images={this.state.images}/> */}
    </div>
  );
}
}

export default App;
