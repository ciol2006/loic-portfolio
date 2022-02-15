import React, { Component } from "react";

const AboutMe = () => {
  return (
    <body className="about-me-page">
      <div className="aboutMe-text-container">
        <p>My Name is Loïc,</p>{" "}
        <p>
          I'm an entousiatht and happy learner. Coding for me came on my early
          days, as my older brother went to university for computer science and
          getting later on a bit more specialized into 3D modeling. I was always
          trying to look over is sholder to learn a bit more about it myself.
        </p>{" "}
        <p>
          Two years ago I got inspire from a video on Youtube about seft taught
          dev that explain there journey. From then on I knew that I was going
          to be a dev one day.
        </p>{" "}
        <p>
          I spend a couple of months working on my skills throuh
          FreeCodeCamp.com, CodeWithMosh.com, Stack Overflow, Youtube. And I
          love it!
        </p>
        <p>Technologies learned:</p>
      </div>

      <div>
        <ul className="logos">
          <li>
            <i className="fa fa-html-alt"></i>
            <span className="caption">Html 5</span>
          </li>
          <li>
            <i className="fa fa-css-alt"></i>
            <span className="caption">Css</span>
          </li>
          <li>
            <i className="fa fa-js-alt"></i>
            <span className="caption">JavaScript</span>
          </li>
          <li>
            <i className="fa fa-react-alt"> </i>
            <span className="caption">React</span>
          </li>
          <li>
            <i className="fa fa-mySql-alt"></i>
            <span className="caption"> MySql </span>
          </li>
        </ul>
      </div>
    </body>
  );
};

export default AboutMe;
