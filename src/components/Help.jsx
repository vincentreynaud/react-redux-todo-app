import React, { Component, Fragment } from "react";
import Header from "./Header";

class Help extends Component {
  componentDidMount() {
    document.title = "Help | React/Redux ToDo List"
  }

  render() {
    return (
      <Fragment>
        <Header headline="Help" tagline="We answer here some FAQs" />
      </Fragment>
    );
  }
}

export default Help;
