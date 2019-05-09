import React, { Component, Fragment } from "react";
import Header from "./Header";

class NotFound extends Component {
  componentDidMount() {
    document.title = "Not Found | React/Redux ToDo App"
  }

  render() {
    return (
      <Fragment>
        <Header headline="404 Error" tagline="Page not found" />
        <div className="alert alert-warning container">
          <strong>Ooops.... sorry! </strong><br />
          The requested page could not be found.
        </div>
      </Fragment>
    );
  }
}

export default NotFound;