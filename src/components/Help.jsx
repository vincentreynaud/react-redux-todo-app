import React, { Component, Fragment } from "react";
import Header from "./Header";

class Help extends Component {
  componentDidMount() {
    document.title = "Help | React/Redux ToDo List"
  }

  render() {
    return (
      <Fragment>
        <Header />
        <p>update heder tagline and wrap questions in jumbo?</p>
      </Fragment>
    );
  }
}

export default Help;
