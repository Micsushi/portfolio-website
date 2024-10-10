import React from "react";
import agileBeast from "../assets/images/agileBeast.png";
import numerify from "../assets/images/numerify.png";
import studyBuddy from "../assets/images/studyBuddy.png";
import wallaperfy from "../assets/images/wallpaperfy.png";
import "../assets/styles/Project.scss";

function Project() {
  return(
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a href="https://github.com/CMPUT301F23T29/agile-beast" target="_blank" rel="noreferrer">
            <img src={agileBeast} className="project-image zoom" alt="Agile Beast" />
            <h2>Agile Beast</h2>
          </a>
          <p>Business inventory app for someone to record and manage the items that they own, and store this information.</p>
        </div>
        <div className="project">
          <a href="https://github.com/Gym-Bros-Programs/banana-math" target="_blank" rel="noreferrer">
            <img src={numerify} className="project-image zoom" alt="Numerify" />
            <h2>Numerify</h2>
          </a>
          <p>Mental math training site with a focus on gamifying math questions and get people to use their brains more.</p>
        </div>
        <div className="project">
          <a href="https://github.com/x-ab-y/StudyBuddy" target="_blank" rel="noreferrer">
            <img src={studyBuddy} className="project-image zoom" alt="Study Buddy" />
            <h2>Study Buddy</h2>
          </a>
          <p>Feature-packed browser extension that improves study efficiency with a focus mode, page summaries and word quick search.</p>
        </div>
        <div className="project">
          <a href="https://github.com/Micsushi/wallaperfy" target="_blank" rel="noreferrer">
            <img src={wallaperfy} className="project-image zoom" alt="Wallpaperfy" />
            <h2>Wallpaperfy</h2>
          </a>
          <p>Windows app that allows the user to connect their calendar and todolist and have it as their desktop wallpaper.</p>
        </div>
      </div>
    </div>
  );
}

export default Project;