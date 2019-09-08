import React, { Component } from 'react'

export default class ImageCard extends Component {
    constructor(props) {
        super(props)
    
        this.imageRef=React.createRef();
    }
    componentDidMount(){
        setTimeout(()=>{console.log(this.imageRef.current.clientHeight)},3000)
        

    }
    render() {
        const {description,urls}=this.props.image;
        return (
            <div>
                <img 
                ref={this.imageRef}
                alt={description} 
                src={urls.regular}/>
            </div>
        )
    }
}
