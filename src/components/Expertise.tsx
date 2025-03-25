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
                            I am experienced in both frontend and backend development, with proficiency
                            in a variety of programming languages and frameworks, enabling me to build
                            modern, scalable, and high-performance applications across diverse platforms.
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
                            I have hands-on experience with maintaining infrastructure for large-scale cloud systems.
                            My DevOps expertise includes containerization, orchestration, infrastructure-as-code,
                            CI/CD pipelines, and deployment automation.
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
                            I am skilled in working with both SQL and NoSQL databases, optimizing schemas for efficient data storage.
                            I have implemented secure RESTful APIs with auth and have experience in vulnerability management and data monitoring.
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