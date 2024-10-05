import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="May 2024 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Developer Intern @ AT&T/INVIDI</h3>
            <h4 className="vertical-timeline-element-subtitle">Edmonton, AB</h4>
            <p>
              Devops Software Development. Backend Development for APIs, using Kotlin, AWS, Terraform, Docker
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2023 - May 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Teaching Assistant @ University of Alberta</h3>
            <h4 className="vertical-timeline-element-subtitle">Edmonton, AB</h4>
            <p>
              Lead TA for CMPUT 201 (Practical Programming Methodology): C, Bash, Data structures and Algorithms
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2022 - Feb 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Geek Squad Agent @ Bestbuy</h3>
            <h4 className="vertical-timeline-element-subtitle">Edmonton, AB</h4>
            <p>
              Hardware repairs, Software repairs, Debugging and troubleshooting a variety of devices
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mar 2021 - May 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst Intern @ NEE YOU Trading</h3>
            <h4 className="vertical-timeline-element-subtitle">Johannesburg, South Africa</h4>
            <p>
            Statistical Analysis, Automation, Data Governance, Data pipelines
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;