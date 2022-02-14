import React, { Component } from "react";

const AboutMe = () => {
  return (
    <body className="about-me-page">
      <main>
        <div className="aboutMe-text-container">
          <p>My Name is Loïc,</p>{" "}
          <p>
            I'm an entousiatht and happy learner. Coding for me came on my early
            days, as my older brother went to university for computer science
            and getting later on a bit more specialized into 3D modeling. I was
            always trying to look over is sholder to learn a bit more about it
            myself.
          </p>{" "}
          <p>
            Two years ago I got inspire from a video on Youtube about seft
            tought dev that explain there journey, and from then on I knew that
            I was going to be a dev on day.ing to be a dev on day.
          </p>{" "}
          <p>
            I spend a couple of months working on my skills throuh
            FreeCodeCamp.com, CodeWithMosh.com, Stack Overflow, Youtube. And I
            love it!
          </p>
          <p>Technologies learned:</p>
        </div>
      </main>
      <div>
        <ul className="logos">
          <li>
            <i className="fa fa-html-alt"></i>
          </li>
          <li>
            <i className="fa fa-css-alt"></i>
          </li>
          <li>
            <i className="fa fa-js-alt"></i>
          </li>
          <li>
            <i className="fa fa-react-alt"> </i>
          </li>
          <li>
            <i className="fa fa-mySql-alt"></i>
          </li>
        </ul>
      </div>
    </body>
  );
};

export default AboutMe;
