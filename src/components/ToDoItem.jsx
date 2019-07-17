import React, { Component } from 'react';
import { connect } from "react-redux";
import { updateToDoText, toggleToDo, removeToDo } from "../actions/index";

class ToDoItem extends Component {
  handleInputKeyUp = e => {
    // Remove focus when the [Enter] key is pressed
    if (e.keyCode === 13) {
      e.target.blur();
    }
  }

  render() {
    const { uuid, text, done } = this.props.data;

    console.log(this.props)
    return (
      <tr className="todo-item" data-id={uuid}>
        <td>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              value={uuid}
              id={`todo-done-${uuid}`}
              checked={done}
              onChange={e => {
                this.props.toggleToDo(uuid)
              }}
            />
            <label
              className="custom-control-label"
              htmlFor={`todo-done-${uuid}`}
            >
              &nbsp;
            </label>
          </div>
        </td>
        <td className="col-1">
          <input
            type="text"
            className="form-contol"
            value={text}
            onChange={e => {
              this.props.updateToDoText(uuid, e.target.value);
            }}
            onKeyUp={e => {
              this.handleInputKeyUp(e)
            }}
          />
        </td>
        <td className="col-action">
          <i
            className="icon-remove far fa-trash-alt"
            onClick={e => this.props.removeToDo(uuid)}
          />
        </td>
      </tr>
    );
  }
}

export default connect(state => ({}), {
  updateToDoText,
  toggleToDo,
  removeToDo
})(ToDoItem);