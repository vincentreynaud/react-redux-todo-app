import React, { Component } from 'react';
import { connect } from "react-redux";
import { updateTodoText, toggleTodo, removeTodo } from "../actions/index";

class TodoItem extends Component {
  handleInputKeyUp = e => {
    // Remove focus when the [Enter] key is pressed
    if (e.keyCode === 13) {
      e.target.blur();
    }
  }

  render() {
    const todo = this.props.data;

    return (
      <tr className="todo-item" data-id={todo.uuid}>
        <td>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              value={todo.uuid}
              id={`todo-done-${todo.uuid}`}
              checked={todo.done}
              onChange={e => {
                this.props.toggleTodo(todo.uuid)
              }}
            />
            <label
              className="custom-control-label"
              htmlFor={`todo-done-${todo.uuid}`}
            >
              &nbsp;
            </label>
          </div>
        </td>
        <td className="col-1">
          <input
            type="text"
            className="form-contol"
            value={todo.text}
            onChange={e => {
              this.props.updateTodoText(todo.uuid, e.target.value);
            }}
            onKeyUp={e => {
              this.handleInputKeyUp(e)
            }}
          />
        </td>
        <td className="col-action">
          <i
            className="icon-remove far fa-trash-alt"
            onClick={e => this.props.removeTodo(todo.uuid)}
          />
        </td>
      </tr>
    );
  }
}

export default connect(state => ({}), {
  updateTodoText,
  toggleTodo,
  removeTodo
})(TodoItem);