import React, { Component } from "react";

export default class Person2 extends Component {
  render() {
    return (
      <div>
       {this.props.clicked('Person 2')}
      </div>
    );
  }
}
