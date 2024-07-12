import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
import { SiReact, SiTypescript } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import MernStackicon from "../MernStackicon";
const WorkExp = () => {
  return (
    <>
      <div className="work">
        <div className=" container Work-exp">
          <h2 className="TechTittle text-uppercase">Work Experence</h2>
          <hr className="breaKline" />

          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="2023 "
              iconStyle={{ background: "#FFF", color: "#fff" }}
              icon={<RiJavascriptFill style={{ color: "#F7DF1E" }} />}
            >
              <h3 className="vertical-timeline-element-title d-flex ">
                MERN Stack Developer {<MernStackicon className="Mernicons" />}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Assimilate Technologies Pune-Maharastra.
              </h4>
              <p>
                <span className="ProjectDetailsEx">Work on LMS Project:</span>{" "}
                Login,Register Page, Show Course, Pagination, light,Dark Mode,
                Graphically show Student Data, and RestAPI Integration use
                Postman, Git/Github-PR,PULL,Config solve.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="2022"
              iconStyle={{ background: "#FFF", color: "#fff" }}
              icon={<SiTypescript style={{ color: "#3178C6" }} />}
            >
              <h3 className="vertical-timeline-element-title">
                React.js Developer{" "}
                {
                  <SiReact
                    size={20}
                    style={{ marginBottom: "5px ", color: "#61DAFB" }}
                  />
                }
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Secpy Community Pvt Ltd(Remote)
              </h4>
              <p>
                <span className="ProjectDetailsEx">
                  Work on Bussiness Website:
                </span>{" "}
                UI Design HomePage, AboutUsPage ContactUS Page.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
