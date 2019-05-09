import React, { Component } from "react";
import { connect } from "react-redux";
import { setHeadline } from "../actions/index";

class Header extends Component {
  componentDidMount() {
    this.props.setHeadline("My ToDo List")
  }

  render() {
    return (
      <div className="jumbotron container">
        <input 
          type="text" 
          className="headline" 
          value={this.props.headline} 
          onChange={e => {
          this.props.setHeadline(e.target.value)
          }}
        />
      </div>
    );
  }
}

export default connect(state => ({}), {
  setHeadline,
})(Header);;
