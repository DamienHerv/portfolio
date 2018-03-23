import React from "react";
import "./PageDev.css";
// import "../assets/resume.pdf";

export default class PageDev extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleDownload = this.handleDownload.bind(this);
  }
  handleScroll() {
    if (window.pageYOffset > 10) {
      document.querySelector(".scroll").classList.add("fade");
    } else {
      document.querySelector(".scroll").classList.remove("fade");
    }
    if (window.pageYOffset > window.innerHeight) {
      window.removeEventListener("scroll", this.handleScroll);
    }
    console.log(window.scrollY);
  }
  handleDownload() {
    console.log("handleDowload called");
    window.open('/getpdf',"_self");
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <div className="developer-page">
        <div>
        <h1 className="developer-title">web <br/> developer.</h1>
        <h5 className="developer-title-sub">started in 2017</h5>
        </div>
        <div>
        <h4 className="about">about me</h4>
        <p className="developer-description">
          I live with my family in Tokyo. I enjoy building web apps from scratch
          and improving them with time. I use{" "}
          <strong className="highlight">javascript</strong> on both client and
          server side. Most of the time I work in a cafe and study code once at
          home.
        </p>
        </div>
        <div className="resume">
          <span className="resume-text">resume (.pdf)</span>
          <div onClick={() => this.handleDownload()}>
            <i className="resume-icon fas fa-download" />
          </div>
          <a href={require("../assets/resume.pdf")}>
            <i className="resume-icon fas fa-external-link-alt" />
          </a>
        </div>

        <div className="scroll">
          <span>scroll</span>
          <div className="scroll-bar-container">
            <div className="scroll-bar" />
          </div>
        </div>
      </div>
    );
  }
}
