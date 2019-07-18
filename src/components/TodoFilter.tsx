import React, { Component } from "react";
import { connect } from "react-redux";
import { filters, setFilter } from "../actions";
import { SetFilterAction } from "../types";

interface Props {
  setFilter(filter: string): SetFilterAction; // duplicate from actions
}

const TodoFilter = ({ setFilter }: Props) => {
  return (
    <div className="todo-filters text-right">
      <div
        className="btn-group btn-group-sm"
        role="group"
        aria-label="Set a filter to show items"
      >
        {Object.values(filters).map(filter => (
          <button
            type="button"
            className={`btn btn-light`}
            onClick={() => {
              setFilter(filter);
            }}
            key={filter}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default connect(
  state => ({}),
  {
    setFilter
  }
)(TodoFilter);

// removed active filter from button classnames: ${this.props.activeFilter === filter ? "active" : ""}
