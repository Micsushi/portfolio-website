import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faMdb } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Rust", 
    "TypeScript", 
    "Python", 
    "C", 
    "React", 
    "Next.js", 
    "Node.js", 
    "Java", 
    "Kotlin",
    "Express.js",
    "FastAPI"
];

const labelsSecond = [
    "AWS", 
    "Google Cloud Platform", 
    "Docker", 
    "Terraform", 
    "Kubernetes",
    "CI/CD pipelines",
    "Vercel",
    "Coolify", 
    "Portainer", 
    "Github action",
    "Bitbucket"
];

const labelsThird = [
    "SQL", "NoSQL", "Firebase", "MongoDB", "Postgres", "Ignite","Supabase", "RESTful API", "Auth", "Snyk", "Datadog"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Languages & Frameworks</h3>
                        <p>
                            I am able to deliver end-to-end solutions!
                        </p>
                        <p>
                            I possess a strong foundation in multiple programming languages,
                            including <b>TypeScript, Rust, C,</b> and <b>Python</b>.
                        </p>
                        <p>
                            I am highly proficient
                            in building modern, scalable web applications using frameworks
                            like <b>Vue, React and Next.js</b>, and I have extensive experience
                            developing mobile applications and backend code with <b>Java</b> and <b>Kotlin</b>.
                            
                        </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Cloud & DevOps</h3>
                        <p>
                            I have hands-on experience with leading cloud computing platforms,
                            including <b>AWS</b> and <b>GCP</b>
                        </p>
                        <p>
                            My DevOps expertise spans a wide range of tools and practices,
                            such as <b>Docker, Kubernetes, Terraform,</b> and CI/CD pipelines using <b>GitHub Actions</b> and <b>Bitbucket pipelines</b>.
                            Additionally, I’ve worked with <b>Vercel, Coolify</b> and <b>Portainer</b> to streamline deployment
                            and container management processes.
                        </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faMdb} size="3x"/>
                    <h3>Databases & Tools</h3>
                        <p>
                            I am skilled in <b>SQL</b> and <b>NoSQL</b> databases, optimizing schemas for efficient data storage.
                        </p>
                        <p>
                            I’ve implemented <b>RESTful APIs</b> with <b>auth0</b> and <b>keycloak</b> for secure communication.
                        </p>
                        <p>
                            Additionally, I’ve worked with <b>Snyk</b> for vulnerability management and <b>Datadog</b> for monitoring and performance optimization.
                        </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;