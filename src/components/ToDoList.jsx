import React, { Component } from "react";
import ToDoItem from "./ToDoItem";

class ToDoList extends Component {
  render() {
    return (
      <ul className="list-group">
        <ToDoItem />
      </ul>
    );
  }
}

export default ToDoList;