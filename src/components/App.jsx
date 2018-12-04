import React, { Component } from 'react';
import Header from "./Header";
import ToDoForm from "./ToDoForm";
import Filters from "./Filters";
import ToDoList from "./ToDoList";


class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <ToDoForm />
        <Filters />
        <ToDoList />
      </div>
    );
  }
}

export default App;
