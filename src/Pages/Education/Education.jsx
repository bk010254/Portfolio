import React from "react";
import { IoSchool } from "react-icons/io5";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import "./Education.css";

const Education = () => {
  return (
    <>
      <div className="container education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2019 - 2023 "
            iconStyle={{ background: "#006875", color: "#fff" }}
            icon={<IoSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              BE Computer Engineering
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              SVCET- Pune Maharastra, IN
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2017 - 2019 "
            iconStyle={{ background: "#006875", color: "#fff" }}
            icon={<IoSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              12th (Computer Science)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              JMJC- Ambajogai Maharastra, IN
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
