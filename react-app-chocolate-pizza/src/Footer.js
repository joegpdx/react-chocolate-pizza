import React, { Component } from "react";
import Sitelinks from "./Sitelinks.js";

export default class Footer extends Component {
  render() {
    return (
        <div>
            <div> Question: | {this.props.email} SiteLinks | <Sitelinks /></div>
        </div>
    );
  }
}