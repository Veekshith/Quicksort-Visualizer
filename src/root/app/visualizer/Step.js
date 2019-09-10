import React, { Component } from "react";
import "./Step.css";

export default class Step extends Component {
  render() {
    return (
      <div className="step">
        <span>{this.props.step}</span>
      </div>
    );
  }
}
