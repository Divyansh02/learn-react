import React, { Component } from "react";
import "./Modal.css";
import AssignmentStatus from './AssignmentStatus'

export default class modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arrayDivs: [
        {
          title: "Assignment 01",
          id: 1,
          date: "18 Sept",
          delay: "On Time",
          status: "72/ 100"
        },
        {
          title: "Assignment 02",
          id: 2,
          date: "18 Sept",
          delay: "On Time",
          status: "72/ 100"
        },
        {
          title: "Assignment 03",
          id: 3,
          date: "18 Sept",
          delay: "On Time",
          status: "72/ 100"
        },
        {
          title: "Assignment 04",
          id: 4,
          date: "18 Sept",
          delay: "On Time",
          status: "72/ 100"
        }
      ]
    };
  }

  render() {
    return (
      <div className="modal-header">
        <div className="modal-heading">
          <h3>Assignments</h3>
          <h2 onClick={this.props.closePopup}>x</h2>
        </div>
        <div>
          <p>Home / Assignments</p>
        </div>
        <AssignmentStatus/>
      {/* <div className="header-list">
        <ul>
          <li>
            2/9<p>Assignments Completed</p>
          </li>
          <li>
            02<p>Tasks Pending</p>
          </li>
          <li>
            Fair<p>Overall Ratings</p>
          </li>
        </ul>
      </div> */}
        <div className="assignment-box">
          {this.state.arrayDivs.map((d, i) => {
            return (
              <div key={`rows-${i}`} id="assignment-list" key={i}>
                <ul>
                  {
                    Object.keys(d).map((datum,i)=>
                    <li key={`data-${i}`}>{d[datum]}</li>)
                  }
                </ul>
              </div>
            );
          })}
        </div>
        <div className="footer" />
      </div>
    );
  }
}
