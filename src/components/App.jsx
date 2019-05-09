import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Header from "./Header";
import ToDoForm from "./ToDoForm";
import ToDoFilter from "./ToDoFilter";
import ToDoList from "./ToDoList";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header headline={this.props.headline} />
        <div className="container">
          <ToDoForm />
          <ToDoFilter />
          <ToDoList />
        </div>
      </Fragment>
    );
  }
}

export default connect(state => ({
  headline: state.headline
}))(App);
