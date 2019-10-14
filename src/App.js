import React, { Component } from "react";
import Modal from "./components/Modal";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false };
  }

  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.togglePopup}>toggle popup</button>
        {this.state.showPopup ? (
          <Modal closePopup={this.togglePopup.bind(this)} />
        ) : null}
      </div>
    );
  }
}
