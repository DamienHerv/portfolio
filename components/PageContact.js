import React from "react";
import "./PageContact.css";

export default class PageContact extends React.Component {
  constructor(props) {
    super(props);
    this.handleCopy = this.handleCopy.bind(this);
    this.copyMessage = this.copyMessage.bind(this);
  }
  copyMessage() {
    let mail = document.querySelector('.mail')
    mail.classList.add('copy-success');
    mail.nextSibling.classList.add('copy-success-message');
    setTimeout(() => {
      mail.classList.remove('copy-success');
    mail.nextSibling.classList.remove('copy-success-message');
    },1150)
  }
  handleCopy() {
    if(navigator.clipboard) {
      navigator.clipboard.writeText(text).then(function() {
        console.log('Async: Copying to clipboard was successful!');
        this.copyMessage()
      }, function(err) {
        console.error('Async: Could not copy text: ', err);
      });
    } else {
      this.copyMessage()
      return
    }
  }
  componentDidMount() {
    new ClipboardJS(".copy-icon");
  }
  render() {
    return (
      <footer className="page-contact page-blue">
        {/* <h5 className="page-title">Contact</h5> */}

        <ul className="footer-list">
          <li className="footer-item">resources</li>
          <li className="footer-item">2018</li>
        </ul>

        <div className="contact">
        <h5 style={{marginBottom: '8px'}}>damien hervieux</h5>
          <div>
            <a className="icon icon-link" href=""><i className=" fab fa-github" /></a>
            <a className="icon icon-link" href=""><i className=" fab fa-linkedin" /></a>
            <a className="icon icon-link" href=""><i className=" fas fa-envelope" /></a>
            
            
            
          </div>
          <div className="copy-mail">
            <span className="mail">email@mail.com</span>
            <span className="copy-success">Copied!</span>
            <div className="copy-icon" data-clipboard-text="email@mail.com" onClick={() => this.handleCopy()}>
              <i
                className="icon fas fa-copy"
               
              />
              {/* <div className="copy-sub">copy email</div> */}
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
