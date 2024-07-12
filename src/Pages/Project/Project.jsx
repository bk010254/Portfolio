import React from "react";
import "./Project.css";

const Project = () => {
  return (
    <>
      <div className="container-projects" id="projects">
        <h2 className="TechTittle">TOP RECENT PROJRCTS</h2>
        <hr className="breaKline" />
        <p className="pb-3 text-center">
          This is My Project Live link with source code Github
        </p>
        <div className="row" id="ads">
          {/* first-Project */}
          <div className="boxx">
            <div className="card rounded">
              <div className="card images">
                <span className="card-notify-badge">Full Stack</span>
                <img
                  src="https://t3.ftcdn.net/jpg/03/27/97/96/360_F_327979651_8nYIqRZE5RaYCs0f2KdXTAG1sdfRmgEl.jpg"
                  alt="project-1"
                />
              </div>

              <div className="card-images-overly m-auto mt-3">
                <span className="card-detail-badge">React.js</span>
                <span className="card-detail-badge">React.js</span>
                <span className="card-detail-badge">React.js</span>
                <span className="card-detail-badge">React.js</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">CryptoCurrency Website</h5>
                </div>
                <a
                  href="https://getcssscan.com/css-box-shadow-examples"
                  className="ad-btn"
                  target="_blank"
                >
                  View
                </a>
              </div>
            </div>
          </div>

          {/* 2ndProject */}

          <div className="boxx">
            <div className="card rounded">
              <div className="card images">
                <span className="card-notify-badge">Full Stack</span>
                <img
                  src="https://img.freepik.com/premium-photo/transportation-logistics-container-cargo-ship-cargo-plane-3d-rendering-illustration_37416-487.jpg"
                  alt="project-1"
                  style={{ height: 225 }}
                />
              </div>

              <div className="card-images-overly m-auto mt-3">
                <span className="card-detail-badge">React.js</span>
                <span className="card-detail-badge">React.js</span>
                <span className="card-detail-badge">React.js</span>
                <span className="card-detail-badge">React.js</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Transportation Website</h5>
                </div>
                <a
                  href="https://getcssscan.com/css-box-shadow-examples"
                  className="ad-btn"
                  target="_blank"
                >
                  View
                </a>
              </div>
            </div>
          </div>

          {/* 3rdProject */}

          <div className="boxx">
            <div className="card rounded">
              <div className="card images">
                <span className="card-notify-badge">Full Stack</span>
                <img
                  src="https://img.freepik.com/premium-vector/cartoon-depicting-clinic-chamber-scene-with-doctors-nurses-providing-medical-diagnostics_177821-5146.jpg?size=626&ext=jpg&ga=GA1.1.2086084361.1717839440&semt=ais_hybrid"
                  alt="project-1"
                />
              </div>

              <div className="card-images-overly m-auto mt-3">
                <span className="card-detail-badge">React.js</span>
                <span className="card-detail-badge">React.js</span>
                <span className="card-detail-badge">React.js</span>
                <span className="card-detail-badge">React.js</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Dr-Appointment System</h5>
                </div>
                <a
                  href="https://getcssscan.com/css-box-shadow-examples"
                  className="ad-btn"
                  target="_blank"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
