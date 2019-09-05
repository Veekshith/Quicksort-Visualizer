import React, { Component } from "react";
import "./ListItem.css";
export default class ListItem extends Component {
  state = {
    markInitial: this.props.markInitial,
    markPivot: this.props.markPivot,
    markedSelected: this.props.markSelected,
    markSorted: this.props.markSorted,
    markLeftArrow: this.props.markLeftArrow,
    markRightArrow: this.props.markRightArrow
  };
  render() {
    return (
      <li
        className="listItem"
        {...this.props.flippedProps}
        data-mark-initial={this.props.markInitial}
        data-mark-pivot={this.props.markPivot}
        data-mark-selected={this.props.markSelected}
        data-mark-sorted={this.props.markSorted}
        data-mark-left-arrow={this.props.markLeftArrow}
        data-mark-right-arrow={this.props.markRightArrow}
      >
        <span>{this.props.children}</span>
      </li>
    );
  }
}
