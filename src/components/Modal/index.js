import React, { Component } from "react";
import "./Modal.css";

export default class modal extends Component {
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
        <div className="header-list">
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
        </div>
        <div className="assignment-box">
          <div id="assignment-list">
            <ul>
              <li>Assignment 01</li>
              <li>18 Sept</li>
              <li>On time</li>
              <li>72/ 100</li>
            </ul>
          </div>
          <div id="assignment-list">
            <ul>
              <li>Assignment 01</li>
              <li>18 Sept</li>
              <li>On time</li>
              <li>72/ 100</li>
            </ul>
          </div>
          <div id="assignment-list">
            <ul>
              <li>Assignment 01</li>
              <li>18 Sept</li>
              <li>On time</li>
              <li>72/ 100</li>
            </ul>
          </div>
          <div id="assignment-list">
            <ul>
              <li>Assignment 01</li>
              <li>18 Sept</li>
              <li>On time</li>
              <li>72/ 100</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
