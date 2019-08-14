import React, { Component } from 'react'

export default class Lifecycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             latitude:'',
             longitude:''
        }
    }
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position=>{
                this.setState({
                    latitude:position.coords.latitude,
                    longitude:position.coords.longitude
                },console.log("Component mounted"))
            }
        )
    }
    componentDidUpdate(){
        console.log("component updated")
    }
    
    render() {
        console.log("component rendered")
        return (
            <div>
                latitude:{this.state.latitude}<br/>
                longitude:{this.state.longitude}
            </div>
        )
    }
}
