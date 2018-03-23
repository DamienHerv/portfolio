import React from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import Page from "./Page";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <div className="section-fixed">
          <Page content="dev" />
        </div>
        <div className="section-scroll">
          <Page content="skills" />
          <Page content="app" />
          <Page content="contact" />
        </div>
      </main>
    );
  }
}

export default hot(module)(App);
