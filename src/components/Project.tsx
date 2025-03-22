import mediCheck from "../assets/images/mediCheck.png";
import studyAmp from "../assets/images/studyAmp.png";
import numerify from "../assets/images/numerify.png";
import studyBuddy from "../assets/images/studyBuddy.png";
import "../assets/styles/Project.scss";

function Project() {
  return(
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a href="https://github.com/NatRunners/StudyAmp" target="_blank" rel="noreferrer">
            <img src={studyAmp} className="project-image zoom" alt="StudyAmp" />
            <h2>StudyAmp - Nathacks Research Division 1st Place</h2>
          </a>
          <p>An <b>EEG brainwave</b> tracking and analysis tool that monitors your attention score through
            a Muse headband. Provides feedback and summaries on your state of mind in a given period.
          </p>
          <p><b>Tech stack:</b> Python, BrainFlow, Flask, Next.js, Docker</p>
        </div>
        <div className="project">
          <a href="https://github.com/Gym-Bros-Programs/banana-math" target="_blank" rel="noreferrer">
            <img src={numerify} className="project-image zoom" alt="Numerify" />
            <h2>Numerify</h2>
          </a>
          <p>Formerly known as Banana Math, this is a mental math training site with a focus on gamifying math
            questions and get people to use their brains more.</p>
          <p><b>Tech stack:</b> PostgresSQL, Supabase, CI/CD pipelines, Kubernetes, GCP, Coolify</p>
        </div>
        <div className="project">
          <a href="https://github.com/A-D-I-T-C/medicheck" target="_blank" rel="noreferrer">
            <img src={mediCheck} className="project-image zoom" alt="MediCheck" />
            <h2>MediCheck - HackED DIVE 3rd Place</h2>
          </a>
          <p> A platform powered by a <b>Retrieval-Augmented Generation</b> pipeline to automate all the administrative tasks for hospitals.</p>
          <p><b>Tech stack:</b> AstraDB, Whisper, DeepSeek, Llama 3.2, TypeScript, React, Tailwind</p>
        </div>
        <div className="project">
          <a href="https://github.com/x-ab-y/StudyBuddy" target="_blank" rel="noreferrer">
            <img src={studyBuddy} className="project-image zoom" alt="Study Buddy" />
            <h2>Study Buddy</h2>
          </a>
          <p>Feature-packed browser extension that improves study efficiency with a focus mode, page summaries and 1-click search.
          </p>
          <p><b>Tech stack:</b> Express.js, Node.js, React, Javascript, Python, OpenAI</p>
        </div>
      </div>
    </div>
  );
}

export default Project;