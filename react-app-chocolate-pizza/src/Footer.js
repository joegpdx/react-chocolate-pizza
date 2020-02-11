import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return <div> Question: | {this.props.email} </div>;
  }
}