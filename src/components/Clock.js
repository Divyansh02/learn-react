import React,{Component} from 'react'

export default class Clock extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             time:''
        }
    }
    
    componentDidMount() {
        setInterval(() => {
            this.setState({time:new Date().toLocaleTimeString()})    
        }, 1000)
    }
    
    render() {
        return (
            <div className="time" >
                The time is: {this.state.time}
            </div>
        );
    }
}
