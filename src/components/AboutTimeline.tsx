import React, { useState, useEffect } from 'react';
import * as utils from "../functions/TimelineJobs";
import epfl_logo from "../../images/job_logos/epfl.png";
// import jobContents from "../variables/jobs";
import quanthome_logo from "../../images/job_logos/quanthome.svg";
import { Navigate, useNavigate, useParams } from "react-router-dom";

interface JobContent {
  title: string;
  description: string;
  href: string;
}

const jobContents = [
  {
    title: "Student Assistant",
    company: "Department of Mathematics, EPFL",
    period: "",
    description:
      "As student assistant at EPFL, I've had the chance to be responsible for various tasks such as \
                      on-site and online individual teaching, group teaching, grading of exams and homeworks, creation of exercises and \
                      presenting the resolution of exercises in front of a class. I have been hired by the department of mathematics, \
                      for a wide variety of courses including first year analysis, mecanical physics, algebra and geometry courses, as well as more advanced 2nd and 3rd year math courses.",
    href: "https://www.epfl.ch/schools/sb/research/math/",
  },

  {
    title: " Data Science Intern",
    company: "Laboratory for Topology and Neuroscience, EPFL",
    period: "",
    description:
      "Within the topological data analysis (TDA) division of the lab, \
                      I worked on a project together with a data science student and under the supervision of two PhD students. \
                      We developed a pipeline designed to study the COVID19 spreading process in the canton of Geneva. \
                      We made use of graph theoretical, statistical and topological techniques in order to modelize and analyse \
                      this process. As a final product, the project came in as a Dockerized Streamlit web application.",
    href: "https://www.epfl.ch/labs/hessbellwald-lab/",
  },

  {
    title: "Research Developer",
    company: "Laboratory for Topology and Neuroscience, EPFL",
    period: "",
    description:
      "The Laboratory for Topology and Neuroscience of EPFL has a divsion that focuses \
                      on the applications of topology to data analysis and machine learning. As a research developer, \
                      I collaborated with Nicolas Berkouk to make a survey about a powerful data analysis tool called \
                      'Levelset Zigzag Persistent Homology'. In realizing this project, I also implemented a Streamlit web application \
                      allowing for an intuitive visual guide of how using this tool works.",
    href: "https://www.epfl.ch/labs/hessbellwald-lab/",
  },

  {
    title: "Data Scientist",
    company: "Quanthome",
    period: "August 2023 - present",
    description:
      "Quanthome is a data science startup based in Lausanne, aiming at digitalizing \
      the Swiss real estate market. \
      With a team of passionate web developers and data scientists, we're designing complex \
      pipelines with the latest technology in order to deliver a platform product. \
      Applying a comprehensive data science stack (databases maintenance, data migration \
      projects, machine learning engineering, workflow orchestration, CI/CD) - to applications \
      focused on both financial and environmental data analysis as well as real estate market analysis. \
      Responsibilities involved recruiting and supervising data science master students. \
      Made a collaboration with the CRML at UNIL (Center for Risk Management of Lausanne).",
    href: "https://www.quanthome.ch/",
  },
];

const JobDetails: React.FC = () => {
  const { index } = useParams<{ index: string }>();

  if (index === undefined) {
    return <Navigate to="/" />;
  }

  const jobIndex = parseInt(index, 10);

  if (isNaN(jobIndex) || jobIndex < 0 || jobIndex >= jobContents.length) {
    return <Navigate to="/" />;
  }

  const jobContent = jobContents[jobIndex];

  return (
    <div className='job-details-container'>
      <h1>{jobContent.title} at {jobContent.company}</h1>
      <p>{jobContent.description}</p>
      <a href={jobContent.href}>Learn more</a>
    </div>
  );
};

interface JobProps {
  index: number;
  isActive: boolean;
}

function Job({ index, isActive }: JobProps) {
  const [show, setShow] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const marginLeftDict = {
    job1: "0px;",
    job2: "max(-10.4vh, -100px);",
    job3: "max(-10.4vh, -100px);",
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  let job = jobs[index];
  let id = `job${index}`;
  let margin_left = marginLeftDict[id as keyof typeof marginLeftDict] || "0px";

  return (
    <div
      className="timeline-sub"
      id={id}
      style={{ marginLeft: margin_left }}
    >
      <img
        className="timeline-job-logo"
        src={job.imageSource}
        onClick={() => navigate(`/job/${index}`)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ border: isActive || isHovered ? '3px solid #4d4b4b' : 'none' }}
      />
      <h2 style={{ fontWeight: isActive ? 'bold' : 'normal' }}>{job.title}</h2>
      <p style={{ paddingLeft: "0px", fontWeight: isActive ? 'bold' : 'normal' }}>
        <i>{job.dates}</i>
      </p>
    </div>
  );
}

var jobs = [
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

function Timeline2() {
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

function AboutTimeline() {
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
        <Timeline2 />
      </div>
    </>
  );
}

export { AboutTimeline, JobDetails };