import React, { Component } from "react";
import Pagination from "react-bootstrap/Pagination";
import "./Paginator.css";
export default class Paginator extends Component {
  state = {
    pageCount: this.props.pageCount
  };
  render() {
    return (
      <Pagination>
        <Pagination.First onClick={this.props.loadFirst} />
        <Pagination.Prev onClick={this.props.loadPrevious} />
        <Pagination.Item key={1}>
          {this.props.index + 1} of {this.state.pageCount}
        </Pagination.Item>
        <Pagination.Next onClick={this.props.loadNext} />
        <Pagination.Last onClick={this.props.loadLast} />
      </Pagination>
    );
  }
}
