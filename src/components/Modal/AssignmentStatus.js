import React, { Component } from 'react';
import  './Modal.css';

export default class AssignmentStatus extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       headerData:[
         {
           key:1,
           status:2,
           description:"Assignments Completed",
           taskCount:2,
           taskStatus:"Tasks Pending",
           ratings:"Fair",
           ratingsDescription:"Overall Ratings"
         }
       ]
    }
  }
  
  render() {
    return (
      <div>
        <div className="header-list">
          {this.state.headerData.map((d,i)=>{
            return (
              <ul>
                <li>{d.status}<p>{d.description}</p></li>
                <li>{d.taskCount}<p>{d.taskStatus}</p></li>
                <li>{d.ratings}<p>{d.ratingsDescription}</p></li>
                
              </ul>
            )
          })}
      </div>
      </div>
    )
  }
}
