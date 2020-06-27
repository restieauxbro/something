import React, { Component } from "react";
import "../index.scss";
import Header from "./Header";
import Hero from "./Hero";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <Hero />
      </div>
    );
  }
}

export default App;