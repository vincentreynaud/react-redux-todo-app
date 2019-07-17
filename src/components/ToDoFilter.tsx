import React, { Component } from "react";
import { connect } from "react-redux";
import { setFilter } from "../actions/index";

class TodoFilter extends Component {
  filters = ["all", "undone", "done"];

  render() {
    return (
      <div className="todo-filters text-right">
        <div
          className="btn-group btn-group-sm"
          role="group"
          aria-label="Set a filter to show items"
        >
          {this.filters.map(filter => (
            <button
              type="button"
              className={`btn btn-light`}
              onClick={e => {
                this.props.setFilter(filter);
              }}
              key={filter}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default connect(state => ({}), {
  setFilter
})(TodoFilter);

// removed active filter from button classnames: ${this.props.activeFilter === filter ? "active" : ""}