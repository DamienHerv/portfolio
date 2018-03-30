import React from "react";
import "./PageApp.css";

export default class PageApp extends React.Component {
  constructor(props) {
    super(props);
  }
  handelLinkClick(id) {
    let currentElement = document.getElementById(id);
    let imageLinks = document.querySelectorAll(".page-app-link");
    imageLinks.forEach(link => link.classList.remove("page-app-active"));
    currentElement.classList.add("page-app-active");
  }

  render() {
    return (
      <div className="page page-b">
        <h5 className="page-title">web apps</h5>
        <div className="page-app-container">
          <a
            id="mobile"
            className="page-app-link page-app-active"
            href="https://watchers-beta.herokuapp.com"
            target="blank"
          >
            <img
              className="page-app-image mobile-portrait"
              src={require("../build/images/screenshot-mobile-portrait.jpg")}
              alt="'watchers' mobile screenshot"
            />
            <img
              className="page-app-image mobile-landscape"
              src={require("../build/images/screenshot-mobile-landscape.jpg")}
              alt="'watchers' mobile screenshot"
            />
          </a>
          <a
            id="desktop"
            className="page-app-link"
            href="https://watchers-beta.herokuapp.com"
            target="blank"
          >
            <img
              className="page-app-image"
              src={require("../build/images/screenshot-desktop.jpg")}
              alt="'watchers' desktop screenshot"
            />
          </a>
          <div id="description" className="page-app-link page-app-description">
            'Watchers' is a movie web application that displays movies currently available online.
          </div>
        </div>
        <div className="page-app-controls">
          <span
            className="control ctrl-click"
            onClick={() => this.handelLinkClick("mobile")}
          >
            mobile
          </span>
          <span className="control">|</span>
          <span
            className="control ctrl-click"
            onClick={() => this.handelLinkClick("desktop")}
          >
            desktop
          </span>
          <span className="control">|</span>
          <span
            className="control ctrl-click"
            onClick={() => this.handelLinkClick("description")}
          >
            description
          </span>
        </div>
      </div>
    );
  }
}
