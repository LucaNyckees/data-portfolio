import * as utils from "../functions/TimelineJobs";

function Timeline1() {
  return (
    <>
      <div className="timeline-2">
        <div className="timeline-2-sub" style={{ left: "200px" }}>
          <p>
            Bachelor of Sciences <br></br> in Mathematics, EPFL <br></br>{" "}
            2017-2020
          </p>
        </div>
        <div className="timeline-2-sub" style={{ left: "500px" }}>
          <p>
            Masters of Sciences <br></br> in Mathematics, EPFL <br></br>{" "}
            2020-2022
          </p>
        </div>
      </div>
    </>
  );
}

function Job(index: number) {
  let job = jobs[index];
  let id = `job${index}`;
  return (
    <>
      <div className="timeline-1-sub" id={id}>
        <h1>{job.title}</h1>
        <p style={{ paddingLeft: "0px" }}>{job.text}</p>
        <div className="jobMoreBtns">
          <a
            className="material-symbols-outlined"
            onMouseOver={() => utils.displayJob(index)}
            onMouseLeave={utils.undisplayJob}
          >
            description
          </a>
          <a
            href={job.href}
            target="_blank"
            className="material-symbols-outlined"
          >
            exit_to_app
          </a>
        </div>
      </div>
    </>
  );
}

var jobs = [
  {
    title: "Teaching Assistant",
    text: "Department of Mathematics, EPFL",
    href: "https://www.epfl.ch/schools/sb/research/math/",
  },
  {
    title: "Data Science Intern",
    text: "Laboratory for Topology and Neuroscience, EPFL",
    href: "https://www.epfl.ch/labs/hessbellwald-lab/",
  },
  {
    title: "Research Developer",
    text: "Laboratory for Topology and Neuroscience, EPFL",
    href: "https://www.epfl.ch/labs/hessbellwald-lab/",
  },
  {
    title: "Data Scientist",
    text: "Quanthome SA, Lausanne, Switzerland",
    href: "https://www.quanthome.ch/",
  },
];

function Timeline2() {
  return (
    <>
      <div className="timeline-1">
        {Job(0)}
        {Job(1)}
        {Job(2)}
        {Job(3)}
      </div>
      <div id="displayJobBox" className="displayJobBox"></div>
    </>
  );
}

function AboutTimeline() {
  let t1 = Timeline1();
  let t2 = Timeline2();
  return (
    <>
      {t1}
      {t2}
    </>
  );
}

export default AboutTimeline;
