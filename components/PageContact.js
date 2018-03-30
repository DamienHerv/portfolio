import React from "react";
import "./PageContact.css";

export default class PageContact extends React.Component {
  constructor(props) {
    super(props);
    this.copyMessage = this.copyMessage.bind(this);
  }
  componentDidMount() {
    new ClipboardJS(".copy-icon");
  }
  copyMessage() {
    let mail = document.querySelector(".copy-mail");
    mail.classList.add("copy-success");
    mail.nextSibling.classList.add("copy-success-message");
    setTimeout(() => {
      mail.classList.remove("copy-success");
      mail.nextSibling.classList.remove("copy-success-message");
    }, 1150);
  }
  render() {
    return (
      <footer className="page page-a">
        <div className="contact-container">
          <h5>damien hervieux</h5>
          <div className="contact-links-container">
            <a className="contact-link" href="https://github.com/dherv">
              <i className="fab fa-github" />
            </a>
            <a
              className="contact-link"
              href="https://www.linkedin.com/in/damien-hervieux/"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a className="contact-link" href="mailto:dh@damienhervieux.com">
              <i className="fas fa-envelope" />
            </a>
          </div>
          <div className="copy-mail-container">
            <div className="copy-message-container">
              <span className="copy-mail">dh@damienhervieux.com</span>
              <span className="copy-success">copied!</span>
            </div>
            <div
              className="copy-icon"
              data-clipboard-text="dh@damienhervieux.com"
              onClick={() => this.copyMessage()}
            >
              <i className="fas fa-copy" />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
