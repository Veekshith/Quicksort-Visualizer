import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ArrayList from "./ArrayList";
import Step from "./Step";
import Paginator from "./Paginator";
import "./Visualizer.css";

export default class Visualizer extends Component {
  state = {
    steps: this.props.steps,
    index: 0
  };

  loadNext() {
    let { index } = this.state;
    index++;
    if (index < this.state.steps.length) {
      this.setStepInputIndex(index);
    }
  }

  loadPrevious() {
    let { index } = this.state;
    index--;
    if (index > -1) {
      this.setStepInputIndex(index);
    }
  }
  loadFirst() {
    this.setStepInputIndex(0);
  }
  loadLast() {
    let stepsLastIndex = this.state.steps.length - 1;
    this.setStepInputIndex(stepsLastIndex);
  }

  setStepInputIndex(index) {
    this.setState({ index });
  }

  render() {
    let index = this.state.index;
    let pageCount = this.state.steps.length;
    return (
      <Card>
        <Card.Header className="cardHeader">QuickSort Visualizer</Card.Header>
        <Card.Body>
          <ArrayList inputArray={this.state.steps[index]}></ArrayList>
          <Step step={this.state.steps[index].name}></Step>
        </Card.Body>
        <Card.Footer className="visualizerFooter">
          <Paginator
            index={index}
            loadNext={this.loadNext.bind(this)}
            loadPrevious={this.loadPrevious.bind(this)}
            loadFirst={this.loadFirst.bind(this)}
            loadLast={this.loadLast.bind(this)}
            pageCount={pageCount}
          ></Paginator>
        </Card.Footer>
      </Card>
    );
  }
}
