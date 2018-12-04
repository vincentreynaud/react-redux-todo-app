import React, { Component } from 'react';

class ToDoForm extends Component {
  render() {
    return (
      <form className="form-inline input-group my-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new to-do item..."
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="submit">
            <i className="fas fa-plus" aria-hidden="true" />&nbsp;Add item
          </button>
        </div>
      </form>
    );
  }
}

export default ToDoForm;