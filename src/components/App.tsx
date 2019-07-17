import * as React from "react";
import { Component } from "react";
import { connect } from "react-redux";

import Header from "./Header";
import TodoForm from "./TodoForm";
import TodoFilter from "./TodoFilter";
import TodoList from "./TodoList";

interface Props {
  headline: string
}

class App extends Component<Props> {
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

export default connect((state: Props) => ({
  headline: state.headline
}))(App);
