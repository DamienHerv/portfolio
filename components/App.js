import React from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import PageDev from "./PageDev";
import PageApp from "./PageApp";
import PageSkills from "./PageSkills";
import PageContact from "./PageContact";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main>
        <div className="section-fixed">
          <PageDev />
        </div>
        <div className="section-scroll">
          <PageSkills />
          <PageApp />
          <PageContact />
        </div>
      </main>
    );
  }
}

export default hot(module)(App);
