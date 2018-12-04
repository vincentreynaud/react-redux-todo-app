import React, { Component, Fragment } from 'react';
import Header from "./Header";
import ToDoForm from "./ToDoForm";
import ToDoFilter from "./ToDoFilter";
import ToDoList from "./ToDoList";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header headline="My ToDo List" tagline="This could be my shopping list" />
        <div className="container">
          <ToDoForm />
          <ToDoFilter />
          <ToDoList />
        </div>
      </Fragment>
    );
  }
}

export default App;
