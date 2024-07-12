import React from "react";
import "./TechStack.css";
import { TechStackList } from "../../Utils/TechStackList";

const TechStack = () => {
  return (
    <>
      <div className="container" id="techstack">
        <h2 className="TechTittle">TECHNOLOGIES STACK</h2>
        <hr className="breaKline" />
        <p className="pb-3 text-center">
          Including Programming Language, Framework, Database, FrontEnd,
          BackEnd, and RestApi
        </p>
        <div className="row">
          {TechStackList.map((tech) => (
            <div className="col-md-3">
              <div className="cards m-2">
                <div key={tech._id} className="card-content">
                  <div className="card-body">
                    <div className="media d-flex justify-content-center">
                      <div className="alig-self-center">
                        <tech.icon
                          className="tech-icon"
                          style={{ color: tech.color }}
                        ></tech.icon>
                      </div>
                      <div className="media-body">
                        <h5>{tech.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechStack;
