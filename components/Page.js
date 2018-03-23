import React from "react";
import "./Page.css";
import PageDev from "./PageDev";
import PageApp from "./PageApp";
import PageSkills from "./PageSkills";
import PageContact from "./PageContact";

export default class Page extends React.Component {
  constructor(props) {
    super(props);
  }
 

  render() {
    let content;
    switch (this.props.content) {
      case "dev":
        content = <PageDev />;
        break;
      case "app":
        content = <PageApp />;
        break;
      case "skills":
        content = <PageSkills />;
        break;
      case "contact":
        content = <PageContact />;
    }
    return <section>{content}</section>;
  }
}
