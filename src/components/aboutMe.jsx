import React, { Component } from "react";

const AboutMe = () => {
  return (
    <body className="about-me-page">
      <div className="aboutMe-text-container">
        <p>My name is Loïc.</p>{" "}
        <p>
          I'm an enthusiastic and motivated learner. I became interested in
          coding and programming at a young age, as my older brother went to
          university for computer science and later he specialized in 3D
          modeling. I was always trying to look over his shoulder to learn a bit
          more about it myself.
        </p>{" "}
        <p>
          Two years ago I was inspired by a Youtube video about a self-taught
          dev who explained their professional and personal journey. From that
          moment I knew that I would be a dev one day.
        </p>{" "}
        <p>
          I spent a couple of months working on my skills throuh
          FreeCodeCamp.com, CodeWithMosh.com, Stack Overflow, Youtube.
        </p>
        <p>
          I consistently challenge myself and solve problems on my own to
          improve my skills, only looking for support if necessary.
        </p>{" "}
        <p>
          I am looking for my first job in a team environment with a mentor who
          can support me in further professional development.
        </p>
        <p>The challenge of coding is for me fun and I love it!</p>
        <p>Technologies learned:</p>
      </div>

      <div>
        <ul className="logos">
          <li>
            <i className="fa fa-html-alt"></i>
            <figcaption className="caption">Html 5</figcaption>
          </li>
          <li>
            <i className="fa fa-css-alt"></i>
            <figcaption className="caption">Css</figcaption>
          </li>
          <li>
            <i className="fa fa-js-alt"></i>
            <figcaption className="caption">JavaScript</figcaption>
          </li>
          <li>
            <i className="fa fa-react-alt"> </i>
            <figcaption className="caption">React</figcaption>
          </li>
          <li>
            <i className="fa fa-mySql-alt"></i>
            <figcaption className="caption"> MySql </figcaption>
          </li>
        </ul>
      </div>
    </body>
  );
};

export default AboutMe;
