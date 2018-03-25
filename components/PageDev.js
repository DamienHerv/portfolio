import React from "react";
import "./PageDev.css";

export default class PageDev extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleDownload = this.handleDownload.bind(this);
  }
  handleScroll() {
    if (window.pageYOffset > 10) {
      document.querySelector(".scroll-container").classList.add("fade");
    } else {
      document.querySelector(".scroll-container").classList.remove("fade");
    }
    if (window.pageYOffset > window.innerHeight) {
      window.removeEventListener("scroll", this.handleScroll);
    }
  }
  handleDownload() {
    window.open("/getpdf", "_self");
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <div className="developer-page">
        <div>
          <h1 className="developer-title">
            web <br /> developer.
          </h1>
          <h5>started in 2017</h5>
        </div>
        <div>
          <h4 className="developer-about">about me</h4>
          <p className="developer-description">
            I live with my family in Tokyo. I enjoy building web apps from
            scratch and improving them with time. I use{" "}
            <strong className="highlight">javascript</strong> on both client and
            server side. Most of the time I work in a cafe and study code once
            at home.
          </p>
        </div>

        <div className="resume">
          <span className="resume-text">resume (.pdf)</span>
          <div className="resume-icon" onClick={() => this.handleDownload()}>
            <i className="fas fa-download" />
          </div>
          <a className="resume-icon" href={require("../assets/Damien Hervieux - Resume 2018.pdf")}>
            <i className="fas fa-external-link-alt" />
          </a>
        </div>

        <div className="scroll-container">
          <span>scroll</span>
          <div className="scroll-bar-container">
            <div className="scroll-bar" />
          </div>
        </div>
      </div>
    );
  }
}
