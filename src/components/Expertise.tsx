import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faMdb } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import 'animate.css';
import '../assets/styles/Expertise.scss';
import useAnimation from './useAnimation'; 

const labelsFirst = [
    "Kotlin",
    "Java",
    "TypeScript", 
    "Python", 
    "C",
    "R",
    "React", 
    "Next.js", 
    "Vue.js",
];

const labelsSecond = [
    "AWS", 
    "GCP",
    "Docker", 
    "Terraform", 
    "Kubernetes",
    "CI/CD",
    "Vercel",
    "Github action",
];

const labelsThird = [
    "Firebase", "MongoDB", "PostgresSQL", "Supabase", "RESTful API", "Auth", "Snyk", "Datadog"
];

function Expertise() {
    const h1Ref = useAnimation<HTMLHeadingElement>();

    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1 className="header" ref={h1Ref}>Expertise</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x"/>
                        <h3>Languages & Frameworks</h3>
                        <p>
                            I build frontend and backend applications with the languages and frameworks below.
                        </p>
                        <div className="flex-chips">
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faDocker} size="3x"/>
                        <h3>Cloud & DevOps</h3>
                        <p>
                            I've maintained infrastructure for large cloud systems, including containers,
                            orchestration, infrastructure as code, CI/CD pipelines, and deployment automation.
                        </p>
                        <div className="flex-chips">
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faMdb} size="3x"/>
                        <h3>Databases & Tools</h3>
                        <p>
                            I work with SQL and NoSQL databases, REST APIs, authentication, vulnerability
                            management, and monitoring.
                        </p>
                        <div className="flex-chips">
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
