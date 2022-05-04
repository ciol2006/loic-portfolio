import React, { Component } from "react";

const Projects = () => {
  return (
    <div className="project-container">
      <div className="frontPage-container">
        <h1>Projects</h1>
        <ul className="projects_grid">
          <li>
            <a
              href="https://github.com/ciol2006/Tic-Tac-Toe"
              title="Tic Tac Toe game"
              target="_blank"
            >
              <i className="tic_Tac_Toe"></i>
            </a>
          </li>
          <li>
            <h2>Work in progress, for the second project</h2>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
