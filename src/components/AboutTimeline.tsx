import React, { useState, useEffect } from 'react';
import * as utils from "../functions/TimelineJobs";
import epfl_logo from "../../images/job_logos/epfl.png";
import quanthome_logo from "../../images/job_logos/quanthome.svg";

function Timeline1() {
  return (
    <>
      <div className="timeline-top">
        <div className="timeline-top-sub" style={{ left: "8vw" }}>
          <p>
            Bachelor of Sciences <br></br> in Mathematics, EPFL <br></br>{" "}
            <i>2017-2020</i>
          </p>
        </div>
        <div className="timeline-top-sub" style={{ left: "28vw" }}>
          <p>
            Masters of Sciences <br></br> in Mathematics, EPFL <br></br>{" "}
            <i>2020-2022</i>
          </p>
        </div>
      </div>
    </>
  );
}

interface JobProps {
  index: number; // Assuming index is a number, adjust type if different
  isActive: boolean; // Assuming isActive is a boolean, adjust type if different
  onClick: () => void; // Assuming onClick is a function that takes no arguments and returns void, adjust type as per your function signature
}

function Job({ index, isActive, onClick }: JobProps) {
  const marginLeftDict = {
    job1: "0px;",
    job2: "max(-10.4vh, -100px);",
    job3: "max(-10.4vh, -100px);",
  };

  let job = jobs[index];
  let id = `job${index}`;
  let margin_left = marginLeftDict[id as keyof typeof marginLeftDict] || "0px";


  return (
    <div
      className="timeline-bottom-sub"
      id={id}
      style={{ marginLeft: margin_left }}
    >
      <img
        className="timeline-job-logo"
        src={job.imageSource}
        onClick={onClick}
        style={{ border: isActive ? '3px solid #4d4b4b' : 'none' }}
      />
      <h1 style={{ fontWeight: isActive ? 'bold' : 'normal' }}>{job.title}</h1>
      <p style={{ paddingLeft: "0px", fontWeight: isActive ? 'bold' : 'normal' }}>
        <i>{job.dates}</i>
      </p>
      {/* <div className="jobMoreBtns">

          <a
            href={job.href}
            target="_blank"
            className="material-symbols-outlined"
          >
            exit_to_app
          </a>
        </div> */}
    </div>
  );
}

var jobs = [
  {
    title: "Teaching Assistant",
    text: "Department of Mathematics, EPFL",
    dates: "09/2019 - 08/2022",
    href: "https://www.epfl.ch/schools/sb/research/math/",
    imageSource: epfl_logo,
  },
  {
    title: "Data Science Intern",
    text: "Laboratory for Topology and Neuroscience, EPFL",
    dates: "12/2020 - 07/2021",
    href: "https://www.epfl.ch/labs/hessbellwald-lab/",
    imageSource: epfl_logo,
  },
  {
    title: "Research Developer",
    text: "Laboratory for Topology and Neuroscience, EPFL",
    dates: "08/2021 - 02/2022",
    href: "https://www.epfl.ch/labs/hessbellwald-lab/",
    imageSource: epfl_logo,
  },
  {
    title: "Data Scientist",
    text: "Quanthome SA, Lausanne, Switzerland",
    dates: "08/2022 - present",
    href: "https://www.quanthome.ch/",
    imageSource: quanthome_logo,
  },
];

function Timeline2() {
  const [activeJob, setActiveJob] = useState(3);

  useEffect(() => {
    utils.displayJob(3); // Display the last job by default
  }, []);

  const handleClick = (index: number) => {
    utils.displayJob(index);
    setActiveJob(index);
  };

  return (
    <>
      <div className="timeline-bottom">
        {jobs.map((job, index) => (
          <Job
            key={index}
            index={index}
            isActive={index === activeJob}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      <div id="displayJobBox" className="displayJobBox"></div>
    </>
  );
}

function AboutTimeline() {
  return (
    <>
      <Timeline1 />
      <Timeline2 />
    </>
  );
}

export default AboutTimeline;