import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Input from "../input/Input";
import Visualizer from "../visualizer/Visualizer";
import store from "../../store";
import lodash from "lodash";
import "./App.css";

export default class App extends Component {
  state = {
    loadVisualizer: false,
    steps: store.getState().steps.steps
  };
  shouldComponentUpdate(props, state) {
    if (!lodash.isEqual(this.state.steps, store.getState().steps.steps)) {
      return true;
    }
  }

  loadVisualizer() {
    let steps = store.getState().steps.steps;
    this.setState({ loadVisualizer: true, steps });
  }
  render() {
    return (
      <Container className="appContainer">
        <Input visualize={this.loadVisualizer.bind(this)}></Input>
        {this.state.loadVisualizer ? (
          <Visualizer
            steps={this.state.steps}
            key={Math.random()}
            inputArray={this.state.steps}
          ></Visualizer>
        ) : null}
      </Container>
    );
  }
}
