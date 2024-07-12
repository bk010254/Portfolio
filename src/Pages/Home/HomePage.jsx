import React from "react";
import "./HomePage.css";
import Typewriter from "typewriter-effect";
import { useTheme } from "../../Context/ThemeContext";
import Resume from "../../assets/docs/resume.txt";
import Fade from "react-reveal/Fade";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
const HomePage = () => {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="home-container" id="home ">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container home-content">
          <Fade right>
            <h2>Hi I'm</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "React.js Developer!",
                    "FrontEnd Developer!",
                    "ReactNative Developer!",
                    "JavaScript Developer!",
                    "MERN Stack Developer!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <Fade bottom>
            <div className="home-buttons">
              <button className="btn btn-hire">Linkdin</button>
              <a className="btn btn-cv" href={Resume} download="Your_name.pdf">
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default HomePage;
