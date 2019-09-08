import React from "react";
import './ImageList.css';
import ImageCard from './ImageCard'
const ImageList = (props) => {
  const test = props.images.map((image)=>{
      return <ImageCard key={image.id} image={image}/>  
  })
  return <div className="image-list">{test}</div>;
  };
export default ImageList;
