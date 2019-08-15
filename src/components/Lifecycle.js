import React, { Component } from 'react'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'
export default class Lifecycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             latitude:'',
             errorMessage:''
        }
    }
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position=>{
                this.setState({
                    latitude:position.coords.latitude,
                    longitude:position.coords.longitude
                },
                err=>{
                    this.setState({
                        errorMessage:err
                    })
                })
            }
        )
    }
    
    render() {
        if(this.state.errorMessage && !this.state.latitude)
        {
            return <div>Error :{this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.latitude)
        {
        return  <SeasonDisplay lat={this.state.latitude}/>
        }
        return <Spinner/>
    }
}
