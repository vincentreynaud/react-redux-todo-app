import React, { Component, Fragment } from "react";
import Header from "./Header";

class NotFound extends Component {
  componentDidMount() {
    document.title = "Not Found | React/Redux ToDo List"
  }

  render() {
    return (
      <Fragment>
        <Header />
        <p>update heder tagline and wrap message in jumbo?</p>
        <div className="alert alert-warning">
          <strong>Ooops.... sorry! </strong><br />
          The requested page could not be found.
        </div>
      </Fragment>
    );
  }
}

export default NotFound;