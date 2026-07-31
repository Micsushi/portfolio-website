import mediCheck from "../assets/images/mediCheck.png";
import studyAmp from "../assets/images/studyAmp.png";
import numerify from "../assets/images/numerify.png";
import studyBuddy from "../assets/images/studyBuddy.png";
import "../assets/styles/Project.scss";
import useAnimation from './useAnimation'; 

function Project() {
  const h1Ref = useAnimation<HTMLHeadingElement>();
  return(
    <div className="projects-container" id="projects">
      <h1 className="header" ref={h1Ref}>Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a href="https://github.com/NatRunners/StudyAmp" target="_blank" rel="noreferrer">
            <h2>StudyAmp - Nathacks 1st Place</h2>
            <img src={studyAmp} className="project-image zoom" alt="StudyAmp" />
          </a>
          <p>An <b>EEG brainwave</b> tracking and analysis tool that uses a Muse headband to monitor
            attention and summarize changes over time.
          </p>
          <p><b>Tech stack:</b> Python, BrainFlow, Flask, Next.js, Docker</p>
        </div>
        <div className="project">
          <a href="https://github.com/Gym-Bros-Programs/banana-math" target="_blank" rel="noreferrer">
            <h2>Numerify</h2>
            <img src={numerify} className="project-image zoom" alt="Numerify" />
          </a>
          <p>Formerly known as Banana Math, Numerify turns mental math practice into a game.</p>
          <p><b>Tech stack:</b> PostgresSQL, Supabase, CI/CD pipelines, Kubernetes, GCP, Coolify</p>
        </div>
        <div className="project">
          <a href="https://github.com/A-D-I-T-C/medicheck" target="_blank" rel="noreferrer">
            <h2>MediCheck - HackED 3rd Place</h2>
            <img src={mediCheck} className="project-image zoom" alt="MediCheck" />
          </a>
          <p>A platform that uses a <b>retrieval-augmented generation</b> pipeline to automate hospital administrative tasks.</p>
          <p><b>Tech stack:</b> AstraDB, Whisper, DeepSeek, Llama 3.2, TypeScript, React, Tailwind</p>
        </div>
        <div className="project">
          <a href="https://github.com/x-ab-y/StudyBuddy" target="_blank" rel="noreferrer">
            <h2>Study Buddy</h2>
            <img src={studyBuddy} className="project-image zoom" alt="Study Buddy" />
          </a>
          <p>A browser extension with focus mode, page summaries, and one-click search.
          </p>
          <p><b>Tech stack:</b> Express.js, Node.js, React, Javascript, Python, OpenAI</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
