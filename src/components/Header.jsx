import React, { Component } from "react";
// import { connect } from "react-redux";

class Header extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">{this.props.headline}</h1>
        <p className="lead tagline">{this.props.tagline}</p>
      </div>
    );
  }
}

export default Header;
