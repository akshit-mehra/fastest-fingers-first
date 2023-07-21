import React from "react";
import "./Footer.css";
import githubLogo from './github-logo.png'
function Footer() {
  return (
    <div className="footerdiv">
      <div className="innerfooter">
        <div className="inner" id="madeby">
          made by <span style={{ marginLeft: '5px' }}><strong>Team Miles</strong></span>
        </div>
        <div className="inner">
          <div>
            <a href="https://github.com/akshit-mehra" target="_blank" rel="noopener noreferrer">
              <img alt="invertocat" src={githubLogo} className="github" />
            </a>
          </div>
          <div>
            <a href="https://" target="_blank" rel="noopener noreferrer">
              <img alt="invertocat" src={githubLogo} className="github" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer