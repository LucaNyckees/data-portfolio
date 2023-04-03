import Menu from "./components/Menu";
import Intro from "./components/Intro";
import { AboutHead } from "./components/AboutHead";
import AboutTimeline from "./components/AboutTimeline";
import * as PortfolioFcts from "./components/ProjectsPortfolio";
import Contact from "./components/Contact";
import Game from "./components/Game";
import "./App.css";
import "material-symbols";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { closeProj } from "./functions/ProjectsPortfolio";
import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  return (
    <>
      <section className="header" id="particles-js">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#ffffff",
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
                value: "#589fe2",
              },
              links: {
                color: "#589fe2",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 3,
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
        <Menu></Menu>
        <Intro></Intro>
      </section>
      <section className="about" id="about">
        <AboutHead></AboutHead>
        <AboutTimeline></AboutTimeline>
      </section>
      <section className="data" id="data">
        <div id="dataTitle">
          <h1>DATA SCIENCE PORTFOLIO</h1>
          <p style={{ marginBottom: "5%" }}>
            “- So, what's your first take on all this ?<br></br>- Well... that’s
            one pretty point-cloud.”
          </p>
        </div>
        <PortfolioFcts.ProjChoiceButtons></PortfolioFcts.ProjChoiceButtons>
        <div className="App">
          {!show && <button onClick={openModal}>Show modal</button>}
          <Modal
            className="project"
            id="myModal"
            closeModal={closeModal}
            show={show}
            index={2}
          />
        </div>

        <PortfolioFcts.Board></PortfolioFcts.Board>
      </section>
      <section
        className="information"
        id="information"
        style={{
          backgroundColor: "#589fe2",
          height: "50vh",
        }}
      >
        <Contact></Contact>
      </section>
    </>
  );
}
/*
<section id="game" className="game">
        <div id="gameTitle">
          <h1>A FUN MATH QUESTION</h1>
          <p>“When you think about it real good... infinity is A LOT.”</p>
        </div>
        <Game></Game>
</section>
<section id="art" className="art">
        <div id="artTitle">
          <h1>ART PROJECTS</h1>
        </div>
      </section>
*/

/*<div className="project" id="myModal" role="dialog">*/

/*<div className="App">
          {!show && <button onClick={openModal}>Show modal</button>}
          <Modal
            className="project"
            id="myModal"
            closeModal={closeModal}
            show={show}
          />
        </div>*/

export default App;
