import React, { Component } from "react";

const Projects = () => {
  return (
    <body className="project-container">
      <div className="frontPage-container">
        <h1>Projects</h1>
        <div className="projects_grid">
          <li>
            <a
              href="https://github.com/ciol2006/Tic-Tac-Toe"
              title="Tic Tac Toe game"
              target="_blank"
            >
              <i className="Tic_Tac_Toe"></i>
            </a>
          </li>
          <li>
            <a href="">
              <h2>Work in progress</h2>
            </a>
          </li>
        </div>
      </div>
    </body>
  );
};

export default Projects;
