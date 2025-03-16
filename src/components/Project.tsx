import React from "react";
import mediCheck from "../assets/images/mediCheck.png";
import studyAmp from "../assets/images/studyAmp.png";
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
          <a href="https://github.com/A-D-I-T-C/medicheck" target="_blank" rel="noreferrer">
            <img src={mediCheck} className="project-image zoom" alt="MediCheck" />
            <h2>MediCheck</h2>
          </a>
          <p>MediCheck is an AI-powered platform designed to streamline healthcare interactions by providing
            seamless access to session data, forms, and patient–clinician communication. It integrates <b>Whisper </b>
             for voice to voice communication, selfhosted <b>DeepSeek</b> and <b>Llama 3.2</b> models for the chatbot, a 
            <b> RAG pipeline</b> with <b>AstraDB</b> for improved knowledge base, and is the platform is built using
            <b> TypeScript, React, Tailwind, </b>and <b>Python</b></p>
        </div>
        <div className="project">
          <a href="https://github.com/NatRunners/StudyAmp" target="_blank" rel="noreferrer">
            <img src={studyAmp} className="project-image zoom" alt="StudyAmp" />
            <h2>StudyAmp</h2>
          </a>
          <p>StudyAmp is a performance tracking and enhancement tool that monitors your attention score through
             your EEG brainwaves. Using a Muse headband or similar devices, StudyAmp
            monitors brain activity to detect periods of high and low focus, providing timestamped insights into
            your study sessions using Python and NumPy to process the data.
            The platform is build with Next.js and Supabase and a Flask backend manages historical study data and AI-driven recommendations. </p>
        </div>
        <div className="project">
          <a href="https://github.com/CMPUT301F23T29/agile-beast" target="_blank" rel="noreferrer">
            <img src={agileBeast} className="project-image zoom" alt="Agile Beast" />
            <h2>Agile Beast</h2>
          </a>
          <p>Agile Beast is an <b>Android </b>app made for managing business inventory. The user can record and manage the items
            that they own, and store this information. We built this app in <b>Java</b> with <b>Firebase</b> as our <b>NoSQL</b> database. We also
            added item recognition uisng <b>Google's Machine Learning Kit</b></p>
        </div>
        <div className="project">
          <a href="https://github.com/Gym-Bros-Programs/banana-math" target="_blank" rel="noreferrer">
            <img src={numerify} className="project-image zoom" alt="Numerify" />
            <h2>Numerify</h2>
          </a>
          <p>Numerify, formerly known as Banana Math, is a mental math training site with a focus on gamifying math
            questions and get people to use their brains more. We build this project using Next.js, Supabase, Typescript and managed
          the infrastructure by deploying it from our own bare metal servers!</p>
        </div>
        <div className="project">
          <a href="https://github.com/x-ab-y/StudyBuddy" target="_blank" rel="noreferrer">
            <img src={studyBuddy} className="project-image zoom" alt="Study Buddy" />
            <h2>Study Buddy</h2>
          </a>
          <p>Feature-packed browser extension that improves study efficiency with a focus mode, page summaries and word quick search.
            The extension will implement Bionic Reading by dynamically reformatting the CSS code on any website and generate summaries and
            search for key words using OpenAI's API.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;