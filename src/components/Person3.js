import React, { Component } from "react";

export default class Person3 extends Component {
  render() {
    return (
      <div>
        {this.props.clicked('Person 3')}
      </div>
    );
  }
}
