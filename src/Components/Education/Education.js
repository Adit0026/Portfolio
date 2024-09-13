import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap } from "react-icons/fa";
import "./Education.css";

const Education = () => {
  return (
    <div className="education-container" id="education" style={{backgroundColor:"red"}}>
      <div className="education-list-container">
        {/* desc */}
        <div className="education-desc-container">
          <h1>
            My <span>Education</span>
          </h1>
        </div>
        {/* Education */}

        <div className="experience">
          <VerticalTimeline lineColor="#003087" layout="2-columns">
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ boxShadow: "0 4px 30px rgba(0, 0, 0, 0.7)",borderRadius:"16px" }}
              contentArrowStyle={{
                borderRight: "7px solid  #fff",
              }}
              date="2018 - 2019"
              iconStyle={{ background: "#fca212", color: "#fff" }}
              icon={<FaGraduationCap />}
            >
              <h3 className="vertical-timeline-element-title">
                Ganpati Convent School
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Class 10th</h4>
              <p className="para">
              Secondary School - 73%
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ boxShadow: "0 4px 30px rgba(0, 0, 0, 0.7)",borderRadius:"16px" }}
              contentArrowStyle={{
                borderRight: "7px solid  #fff",
              }}
              date="2020 - 2021"
              iconStyle={{ background: "#fca212", color: "#fff" }}
              icon={<FaGraduationCap />}
            >
              <h3 className="vertical-timeline-element-title">
                Ganpati Convent School
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Class 12th</h4>
              <p className="para">
              Senior Secondary School - 71%
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ boxShadow: "0 4px 30px rgba(0, 0, 0, 0.7) ",borderRadius:"16px" }}
              contentArrowStyle={{
                borderRight: "7px solid  #fff",
              }}
              date="2021 - Present"
              iconStyle={{ background: "#fca212", color: "#fff" }}
              icon={<FaGraduationCap />}
            >
              <h3 className="vertical-timeline-element-title">
                 Chitkara University
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Computer Science And Engineering</h4>
              <p className="para">
              CGPA - 8.91/10
              </p>
            </VerticalTimelineElement>

            
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Education;
