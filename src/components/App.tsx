import * as React from "react";
import { Component } from "react";
import { connect } from "react-redux";

import Header from "./Header";
import TodoForm from "./TodoForm";
import TodoFilter from "./TodoFilter";
import TodoList from "./TodoList";

import { HeadlineState, FilterState, TodoState } from "../types";

import { AppState } from "../types";

class App extends Component<AppState> {
  render() {
    return (
      <>
        <Header headline={this.props.headline} />
        <div className="container">
          <TodoForm />
          <TodoFilter />
          <TodoList />
        </div>
      </>
    );
  }
}

export default connect((state: AppState) => ({
  headline: state.headline
}))(App);
