import Menu from "./components/Menu";
import Intro from "./components/Intro";
import Stack from "./components/Stack";
import { AboutHead } from "./components/AboutHead";
import { JobsTimeline } from "./components/Jobs/JobsTimeline";
import JobDetails from "./components/Jobs/JobDetails";
import ProjectDetails from "./components/Projects/ProjectDetails";
import Portfolio from "./components/Projects/ProjectsPortfolio";
import Contact from "./components/Contact";
import "./App.css";
import "material-symbols";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  const [show, setShow] = useState(false);
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  let colorBackParticles = "#ffffff";

  return (
    <>
      <Router>
          <Menu></Menu>
        <Routes>
          <Route path="/" element={
            <>
              <section className="header" id="particles-js">
                <Particles
                  id="tsparticles"
                  init={particlesInit}
                  loaded={particlesLoaded}
                  options={{
                    background: {
                      color: {
                        value: colorBackParticles,
                      },
                    },
                    fpsLimit: 120,
                    interactivity: {
                      events: {
                        onClick: {
                          enable: true,
                          mode: "push",
                        },
                        onHover: {
                          enable: true,
                          mode: "repulse",
                        },
                        resize: true,
                      },
                      modes: {
                        push: {
                          quantity: 4,
                        },
                        repulse: {
                          distance: 200,
                          duration: 0.4,
                        },
                      },
                    },
                    particles: {
                      color: {
                        value: "#4d4b4b",
                      },
                      links: {
                        color: "#4d4b4b",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                      },
                      collisions: {
                        enable: false,
                      },
                      move: {
                        direction: "none",
                        enable: true,
                        random: false,
                        speed: 1,
                        straight: false,
                      },
                      number: {
                        density: {
                          enable: true,
                          area: 800,
                        },
                        value: 80,
                      },
                      opacity: {
                        value: 0.5,
                      },
                      shape: {
                        type: "circle",
                      },
                      size: {
                        value: { min: 1, max: 5 },
                      },
                    },
                    detectRetina: true,
                  }}
                />
                <Intro></Intro>
              </section>
              <section className="about" id="about">
                <AboutHead />
                <JobsTimeline />
              </section>
              <section className="data" id="data">
                <div className="portfolio-section-header">
                  <h1>PORTFOLIO</h1>
                  <h2>A selection of data science projects</h2>
                </div>
                <Portfolio show={show} />
              </section>
              <section className="stack" id="stack">
                <Stack></Stack>
              </section>
              <section
                className="information"
                id="information"
              >
                <Contact></Contact>
              </section>
            </>
          } />
          <Route path="/job/:index" element={<JobDetails />} />
          <Route path="/portfolio/:index" element={<ProjectDetails />} />
        </Routes>
      </Router>
    </>
  );
}


export default App;
