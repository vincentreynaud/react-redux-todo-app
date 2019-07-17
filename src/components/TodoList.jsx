import React, { Component } from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  filteredItems = () => {
    let itemsFiltered = [];

    for (const uuid in this.props.items) {
      const item = this.props.items[uuid];
      if (
        this.props.filter === "all" ||
        (this.props.filter === "done" && item.done === true) ||
        (this.props.filter === "undone" && item.done === false)
      ) {
        itemsFiltered.push(item);
      }
    }
    return itemsFiltered;
  };

  render() {
    return (
      <div className="todo-list">
        <table className="todo-items table table-borderless">
          <tbody>
            {this.filteredItems().map(item => {
              return <TodoItem key={`todo-item-${item.uuid}`} data={item} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(state => ({
  items: state.todoItems,
  filter: state.filter
}))(TodoList);
