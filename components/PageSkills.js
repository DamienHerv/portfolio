import React from "react";
import "./PageSkills.css";

export default class PageSkills extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="page page-a">
        <h5 className="page-title">Skills</h5>
        
          <ul className="list-tag">
            <li className="tag">react</li>
            <li className="tag">node<span className="uppercase">js</span></li>
            <li className="" />
            <li className="tag">webpack</li>

            <li className="tag"><span className="uppercase">html5</span></li>
            <li className="tag">express</li>
            <li className="tag">heroku</li>
            <li className="tag">command line</li>

            <li className="tag"><span className="uppercase">css3</span></li>
            <li className="tag">mongo<span className="uppercase">db</span></li>
            <li className="tag">jest</li>
            <li className="tag">git/github</li>

            <li className="tag">redux</li>
            <li className="tag">passport</li>
            <li className="tag">enzyme</li>
            <li className="tag">yarn</li>
          
            <li className="header">front-end</li>
            <li className="header">back-end</li>
            <li className="header">deployement <br/> testing</li>
            <li className="header">development <br/> production</li>
          </ul>
       
      </div>
    );
  }
}
