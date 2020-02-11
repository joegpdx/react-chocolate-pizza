import React, { Component } from "react";
import Header from "./Header.js";
import Body from "./Body.js";
import Footer from "./Footer.js";
import Sitelinks from "./Sitelinks.js";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Sitelinks />
        <Header logo="logo.png" />
        <Body title= "Chocolate Pizza" />
        <Footer email={"joe@joe.com"} />
      </div>
    );
  }
}
