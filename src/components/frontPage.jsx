import React, { Component } from "react";
import { FaUserTie, FaAddressCard } from "react-icons/fa";

class FrontPage extends Component {
  state = {};
  render() {
    return (
      <div className="front-Page">
        <div className="frontPage-container">
          <h1 className="myName">Loïc Mas</h1>
          <h2 className="animation-frontPage">Web /Front End Developer</h2>
        </div>
        <div classeName="aboutMeFrontPage">{/* <FaUserTie /> */}</div>
        <div className="footer-frontPage">
          <a
            className="email-me"
            href="mailto:ciol2006@gmail.com"
            title="E-mail Me"
            target="_blank"
          >
            <h3>
              {" "}
              <FaAddressCard /> <br /> ciol2006@gmail.com
            </h3>
          </a>
        </div>
      </div>
    );
  }
}

export default FrontPage;
