import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import useAnimation from './useAnimation'; 

function Timeline() {
    const h1Ref = useAnimation<HTMLHeadingElement>();
  return (
    <div id="history">
      <div className="items-container">
        <h1 className="header" ref={h1Ref}>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            dateClassName="my-custom-date-class"
            date="May 2024 - Current"
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Developer Intern</h3>
            <h5 className="vertical-timeline-element-subtitle">INVIDI Technologies</h5>
            <h5 className="vertical-timeline-element-subtitle">Edmonton, AB</h5>
            <p>
              Worked as a <b>full-stack</b> and <b>DevOps</b> intern using <b>AWS, Terraform, Kubernetes,
              Kotlin, Vue.js, Postgres, Snyk, Datadog, and Artifactory</b>.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            dateClassName="my-custom-date-class"
            date="Aug 2023 - May 2024"
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Undergraduate Teaching Assistant</h3>
            <h5 className="vertical-timeline-element-subtitle">University of Alberta</h5>
            <h5 className="vertical-timeline-element-subtitle">Edmonton, AB</h5>
            <p>
              Served as a lead TA for CMPUT 201, Practical Programming Methodology. Led labs on
              <b> Bash</b>, <b>C</b>, virtual machines, data structures, and algorithms.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            dateClassName="my-custom-date-class"
            date="May 2022 - Feb 2023"
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Geek Squad Agent</h3>
            <h5 className="vertical-timeline-element-subtitle">Bestbuy</h5>
            <h5 className="vertical-timeline-element-subtitle">Edmonton, AB</h5>
            <p>
              Performed <b>hardware repairs</b>, <b>software debugging</b>, and <b>system troubleshooting</b>
              while helping customers in person.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            dateClassName="my-custom-date-class"
            date="Mar 2021 - May 2022"
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst Intern</h3>
            <h5 className="vertical-timeline-element-subtitle">NEE YOU Trading</h5>
            <h5 className="vertical-timeline-element-subtitle">Johannesburg, South Africa</h5>
            <p>
              Worked on <b>statistical analysis, automation, data governance, and data pipelines</b>
              using <b>R, Python, MongoDB, and Java</b>.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            dateClassName="my-custom-date-class"
            date="JUN 2019 - Current"
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Private Tutor</h3>
            <h5 className="vertical-timeline-element-subtitle">Self-Employed</h5>
            <h5 className="vertical-timeline-element-subtitle">Remote</h5>
            <p>
              I've tutored more than <b>100 students</b>, from grade 3 through second-year university.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            dateClassName="my-custom-date-class"
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Other</h3>
            <h5 className="vertical-timeline-element-subtitle">See my <a href="https://www.linkedin.com/in/wjshi/">LinkedIn</a> for details</h5>
            <p>
              Student leadership roles include <b>Residence Floor Coordinator, Vice President of
              Schaffer Residence, UACS VP External,</b> and <b>UACS VP Admin</b>.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
