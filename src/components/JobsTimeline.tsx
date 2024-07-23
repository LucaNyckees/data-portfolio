import { useState } from 'react';
import epfl_logo from "../../images/job_logos/epfl.png";
import quanthome_logo from "../../images/job_logos/quanthome.svg";
import Job from "../components/Job"

const jobs = [
  {
    title: "Teaching Assistant",
    text: "Department of Mathematics, EPFL",
    dates: "Sept. 2019 - June 2022",
    href: "https://www.epfl.ch/schools/sb/research/math/",
    imageSource: epfl_logo,
  },
  {
    title: "Data Science Intern",
    text: "Laboratory for Topology and Neuroscience, EPFL",
    dates: "Dec. 2020 - July 2021",
    href: "https://www.epfl.ch/labs/hessbellwald-lab/",
    imageSource: epfl_logo,
  },
  {
    title: "Research Developer",
    text: "Laboratory for Topology and Neuroscience, EPFL",
    dates: "August 2021 - Feb. 2022",
    href: "https://www.epfl.ch/labs/hessbellwald-lab/",
    imageSource: epfl_logo,
  },
  {
    title: "Data Scientist",
    text: "Quanthome, Lausanne, Switzerland",
    dates: "August 2022 - present",
    href: "https://www.quanthome.ch/",
    imageSource: quanthome_logo,
  },
];

function Timeline() {
  const [activeJob, setActiveJob] = useState();

  return (
    <>
      <div className="timeline">
        {jobs.map((job, index) => (
          <Job
            key={index}
            index={index}
            isActive={index === activeJob}
          />
        ))}
      </div>
    </>
  );
}

function JobsTimeline() {
  return (
    <>
      <div className='education-container'>
        <div className='bachelor-description'>
          <p>
            Bachelor of Sciences in Mathematics at EPFL <br></br>{" "}
            <i>Sept. 2017 - June 2020</i>
          </p>
          <label>Algebraic Geometry</label>
          <label>Differential Geometry</label>
          <label>Algebraic Topology</label>
        </div>
        <div className='master-description'>
          <p>
            Masters of Sciences in Mathematics at EPFL <br></br>{" "}
            <i>Sept. 2020 - June 2022</i>
          </p>
          <label>Statistical Theory</label>
          <label>Machine Learning</label>
          <label>Topological Optimization</label>
        </div>
      </div>
      <div className='timeline-container'>
        <Timeline />
      </div>
    </>
  );
}

export { JobsTimeline };