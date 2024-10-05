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
    "C++", 
    "React", 
    "Next.js", 
    "Node.js", 
    "Java", 
    "Kotlin"
];

const labelsSecond = [
     "AWS", 
     "Google Cloud Platform", 
     "Docker", 
     "Terraform", 
     "Kubernetes", 
     "Coolify", 
     "Portainer", 
];

const labelsThird = [
    "SQL", "NoSQL", "Firebase", "MongoDB", "Postgres", "Ignite","Supabase", "RESTful API"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Programming Languages & Frameworks</h3>
                    <p>I have a strong foundation in multiple programming languages including Rust, TypeScript and Python. I am proficient in building web applications
                         using frameworks like React and Next.js and I have extensive experience in creating mobile apps in languages like Java and Kotlin</p>
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
                    <p>I have hands-on experience with cloud computing platforms such as AWS and Google Cloud Platform, where I’ve managed and optimized infrastructure. 
                        My DevOps expertise includes but is not limited to: Docker, Kubernetes,  Terraform, CI/CD pipelines, Github Action, Coolify and Portainer.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faMdb} size="3x"/>
                    <h3>Databases & APIs</h3>
                    <p>I am skilled in working with both SQL and NoSQL databases, optimizing queries and managing schema designs to ensure efficient data storage and retrieval. 
                        I have also implemented and integrated RESTful APIs, enabling seamless communication between different components of an application.</p>
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