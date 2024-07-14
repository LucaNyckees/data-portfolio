import Menu from "./components/Menu";
import Intro from "./components/Intro";
import Stack from "./components/Stack";
import { AboutHead } from "./components/AboutHead";
import AboutTimeline from "./components/AboutTimeline";
import * as PortfolioFcts from "./components/ProjectsPortfolio";
import Contact from "./components/Contact";
import "./App.css";
import "material-symbols";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { useState } from "react";
import React from "react";
import { render } from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";

function componentToHex(c: any) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r: any, g: any, b: any) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function App() {
  const [show, setShow] = useState(false);
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

  let colorBackParticles = "#ffffff";

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
        {/* <Timeline></Timeline> */}
        <AboutTimeline></AboutTimeline>
      </section>
      <section className="data" id="data">
        <div className="portfolio-section-header">
          <h1>PORTFOLIO</h1>
          <h2>A selection of data science projects</h2>
          {/* <p style={{ marginBottom: "2.7%" }}>
            “- So, what's your first take on all this ?<br></br>- Well... that’s
            one pretty point-cloud.”
          </p> */}
        </div>
        <PortfolioFcts.Board show={show}></PortfolioFcts.Board>
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
      {/* <ChakraProvider>
        <Todos /> 
      </ChakraProvider> */}
    </>
  );
}

/*
<section id="art" className="art">
        <div id="artTitle">
          <h1>ART PROJECTS</h1>
        </div>
      </section>
*/

/*<div className="project" id="myModal" role="dialog">*/

{/* <div className="App">
  {!show && <button onClick={openModal}>Show modal</button>}
  <Modal
    className="project"
    id="myModal"
    closeModal={closeModal}
    show={show}
  />
</div> */}

export default App;
