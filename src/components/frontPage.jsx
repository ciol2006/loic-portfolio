import React, { Component } from "react";

class FrontPage extends Component {
  state = {};
  render() {
    return (
      <body className="front-Page">
        <div className="frontPage-container">
          <h1 className="myName">Loïc Mas</h1>
          <h2 className="animation-frontPage">Web /Front End Developer</h2>
        </div>
        <div className="footer-frontPage">
          <h3 className="email-me">ciol2006@gmail.com</h3>
        </div>
      </body>
    );
  }
}

export default FrontPage;
