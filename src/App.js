import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/navBar";
import AboutMe from "./components/aboutMe";
import FrontPage from "./components/frontPage";
import NotFound from "./components/notFound";
import Resume from "./components/resume";
import Projects from "./components/projects";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <main className="main-container">
          <Routes>
            <Route path="/about-me" element={<AboutMe />} />{" "}
            <Route path="/loic-portfolio" element={<FrontPage />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route
              path="/"
              element={<Navigate replace to="/loic-portfolio" />}
            />
          </Routes>
        </main>
      </>
    );
  }
}
export default App;
