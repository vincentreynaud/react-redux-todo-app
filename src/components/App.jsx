import React, { Component } from 'react';
import Header from "./Header";
import ToDoForm from "./ToDoForm";
import ToDoFilter from "./ToDoFilter";
import ToDoList from "./ToDoList";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <ToDoForm />
        <ToDoFilter />
        <ToDoList />
      </div>
    );
  }
}

export default App;
