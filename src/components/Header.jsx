import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4 tagline">My ToDo List</h1>
        <p className="lead">This could be my shopping list</p>
      </div>
    );
  }
}

export default Header;
