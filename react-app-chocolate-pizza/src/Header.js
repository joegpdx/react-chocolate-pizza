import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <img alt="logo" src={this.props.logo} />
      </div>
    );
  }
}