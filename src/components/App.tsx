import * as React from "react";
import { Component } from "react";
import { connect } from "react-redux";

import Header from "./Header";
import TodoForm from "./TodoForm";
import TodoFilter from "./TodoFilter";
import TodoList from "./TodoList";

import { HeadlineState, FilterState, TodoState } from "../types";

interface AppProps {
  headline: HeadlineState;
  filter: FilterState;
  todoItems: TodoState;
}

class App extends Component<AppProps> {
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

export default connect((state: AppProps) => ({
  headline: state.headline
}))(App);
