import React, { Component } from 'react'
export default class Person extends Component {
   
    render() {
        return (
            <div>
                <button style={{color:'red'}} onClick={testFunction}>Test</button>   
            </div>
        )
    }
}
export function testFunction(){
    console.log("It renders");
}
