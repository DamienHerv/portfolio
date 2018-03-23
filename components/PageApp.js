import React from "react";
import "./PageApp.css";
// import '../assets/images/screenshot-mobile-portrait.jpg'

export default class PageApp extends React.Component {
  constructor(props) {
    super(props);
  }
  handelClick(id) {
    let element = document.getElementById(id);
    if (id === "mobile") {
      element.nextSibling.classList.remove("page-app-active");
      element.nextSibling.nextSibling.classList.remove("page-app-active");
    } else if (id === 'desktop') {
      element.nextSibling.classList.remove("page-app-active");
      element.previousSibling.classList.remove("page-app-active");
    } else {
      element.previousSibling.classList.remove("page-app-active");
      element.previousSibling.previousSibling.classList.remove("page-app-active");
    }
    element.classList.add("page-app-active");
  }

  render() {
    return (
      <div className="page page-app">
        <h5 className="page-title">web apps</h5>
        <div className="page-app-container">
          <a
            id="mobile"
            className="page-app-link page-app-active"
            href="https://frozen-wildwood-81102.herokuapp.com"
          >
            <img
              className="page-app-image mobile-portrait"
              src={require("../assets/images/screenshot-mobile-portrait.jpg")}
              alt="watchers app mobile screenshot"
            />
            <img
              className="page-app-image mobile-landscape"
              src={require("../assets/images/screenshot-mobile-landscape-2.png")}
              alt="watchers app mobile screenshot"
            />
          </a>
          <a
            id="desktop"
            className="page-app-link"
            href="https://frozen-wildwood-81102.herokuapp.com"
          >
            <img
              className="page-app-image"
              src={require("../assets/images/screenshot-desktop.png")}
              alt="watchers app mobile screenshot"
            />
          </a>
          <div id="description" className="page-app-link page-app-description">
            A movie web application that shows you which movies you can watch right now at home
          </div>
          </div>
          <div className="page-app-controls">
            <span className="control ctrl-click" onClick={() => this.handelClick("mobile")}>mobile</span>
            <span className="control">|</span>
            <span className="control ctrl-click" onClick={() => this.handelClick("desktop")}>desktop</span>
            <span className="control">|</span>
            <span className="control ctrl-click" onClick={() => this.handelClick("description")}>description</span>
            
           
          </div>
        
      </div>
    );
  }
}
