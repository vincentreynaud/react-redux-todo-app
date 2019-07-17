import * as React from "react";
import { Component } from "react";
import { connect } from "react-redux";

import Header from "./Header";
import ToDoForm from "./ToDoForm";
import ToDoFilter from "./ToDoFilter";
import ToDoList from "./ToDoList";

interface Props {
  headline: string
}

class App extends Component<Props> {
  render() {
    return (
      <>
        <Header headline={this.props.headline} />
        <div className="container">
          <ToDoForm />
          <ToDoFilter />
          <ToDoList />
        </div>
      </>
    );
  }
}

export default connect((state: Props) => ({
  headline: state.headline
}))(App);
