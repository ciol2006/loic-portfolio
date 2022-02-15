import React, { Component } from "react";

class FrontPage extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="frontPage-container">
          <h1 className="myName">Loïc Mas</h1>
          <h2 className="animation-frontPage">Web /Front End Developer</h2>
        </div>
        <h3 className="email-me">ciol2006@gmail.com</h3>
      </>
    );
  }
}

export default FrontPage;
