import React, { Component } from "react";

const Resume = () => {
  return (
    <body className="resume-page">
      <header id="site-header">
        <div className="container">
          <h1> Loic Mas</h1>
          <h2>
            {" "}
            Conscientious, reliable individual who constenly continues building
            knowledge and skill base
          </h2>
        </div>
      </header>

      {/* I need to had button to access key part of this page and a button at the bottom to get back to the top */}

      {/* Main part of my resume below */}

      <main>
        <div className="resume-container">
          <article>
            <header>
              <h1 className="post-title">Resume</h1>
            </header>
            <div>
              tous mon bordel
              <h1>Professional experiences</h1>
              {/* first job description */}
              <h2>First aid Attendant</h2>
              <p>
                <strong>Arkangelski Enterprises:</strong> Communication and team
                work was important.{" "}
              </p>
              <p>Salmo</p>
              <p>2019-2021</p>
              <p></p>
              {/* second job description */}
              <h2>Volunteer Ski Patrol</h2>
              <p>
                <strong>Whitewater Ski Resort:</strong> Communication and team
                work was a key asset.{" "}
              </p>
              <p>Nelson</p>
              <p>2017-2019</p>
              <p></p>
              {/* third job description */}
              <h2>Sale Associate</h2>
              <p>
                <strong>ROAM:</strong> Customer services, data entry and team
                work was a daily skill to have.{" "}
              </p>
              <p>Nelson</p>
              <p>2017-2019</p>
              <p></p>
              <h1>Skills</h1>
              <li>
                Completes basic to advance functions using MySql Workbench
              </li>
              <li>Familiar with Windows and Linux(Ubuntu)</li>
              <li>
                Works well in a team environment to collaborte on shared
                objectives
              </li>
              <li>
                Maintains professionalism in the worplace by uploading
                organization standards and exceeding position expectations
              </li>
              <li>
                Ensures accurate record-keeping and data entry, for example by
                comleting shipping/receiving data entry, first aid records,
                insurance reports and follow up documentation in previous
                positions
              </li>
              <li>
                Fluent in English and French, with a high proficiency in Spanish
              </li>
              <h1>Certifications</h1>
              <h2>
                <strong>Occupational First Aid Level 3</strong>
              </h2>
              <p>Selkirk College</p>
              <p>2020</p>
              <h2>
                <strong>First Aid/ Cpr C & AED</strong>
              </h2>
              <p>Nelson & District Community Complex</p>
              <p>2017</p>
            </div>
            <footer> ciol2006@gmail.com</footer>
          </article>
        </div>
      </main>
    </body>
  );
};

export default Resume;
