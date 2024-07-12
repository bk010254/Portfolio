import Layout from "./components/Layout/Layout";
import About from "./Pages/About/About";
import "./App.css";
import ScrollToTop from "react-scroll-to-top";
import Tada from "react-reveal/Tada";
import TechStack from "./Pages/TechStack/TechStack";
import Project from "./Pages/Project/Project";
import Education from "./Pages/Education/Education";
import WorkExp from "./Pages/WorkExp/WorkExp";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Cont from "./Pages/ContactUs/Cont";
import { useTheme } from "./Context/ThemeContext";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <Layout />

        <div className="container">
          <About />
          <Education />
          <TechStack />
          <Project />
          <WorkExp />
          {/* <Cont /> */}
          <ContactUs />
        </div>
        <div className="footer pb-3 ms-3">
          <Tada>
            <h4 className="text-center">Balaji Mahadev Kamble &copy; 2023</h4>
          </Tada>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#000"
        style={{ backgroundColor: "#006875", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
