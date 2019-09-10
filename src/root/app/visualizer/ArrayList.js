import React, { Component } from "react";
import ListItem from "./ListItem";
import { Flipper, Flipped } from "react-flip-toolkit";
import "./ArrayList.css";

export default class ArrayList extends Component {
  render() {
    let ls = [],
      uniqueKeys = [];
    let listItemStates = this.props.inputArray.elementStates;
    uniqueKeys = this.props.inputArray.uniqueKeys;
    this.props.inputArray.listGlance.map((item, index) => {
      ls.push(
        <Flipped key={uniqueKeys[index]} flipId={uniqueKeys[index]}>
          {flippedProps => (
            <ListItem
              flippedProps={flippedProps}
              markPivot={listItemStates[index].markPivot}
              markInitial={listItemStates[index].markInitial}
              markSelected={listItemStates[index].markSelected}
              markSorted={listItemStates[index].markSorted}
              markLeftArrow={listItemStates[index].markLeftArrow}
              markRightArrow={listItemStates[index].markRightArrow}
            >
              {item}
            </ListItem>
          )}
        </Flipped>
      );
    });

    return (
      <Flipper flipKey={uniqueKeys.join("")} spring="veryGentle">
        <ul className="list">{ls}</ul>
      </Flipper>
    );
  }
}
