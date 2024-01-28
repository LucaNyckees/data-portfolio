import * as utils from "../functions/TimelineJobs";

function Timeline1() {
  return (
    <>
      <div className="timeline-top">
        <div className="timeline-top-sub" style={{ left: "8vw" }}>
          <p>
            Bachelor of Sciences <br></br> in Mathematics, EPFL <br></br>{" "}
            2017-2020
          </p>
        </div>
        <div className="timeline-top-sub" style={{ left: "28vw" }}>
          <p>
            Masters of Sciences <br></br> in Mathematics, EPFL <br></br>{" "}
            2020-2022
          </p>
        </div>
        <div className="timeline-top-sub" style={{ left: "56vw" }}>
        </div>
      </div>
    </>
  );
}

function Job(index: number) {
  const marginLeftDict: Record<string, string> = {
    // job0: "-140px;",
    job1: "0px;",
    job2: "max(-10.4vh, -100px);",
    job3: "max(-10.4vh, -100px);",
    // Add more entries as needed
  };
  let job = jobs[index];
  let id = `job${index}`;
  let margin_left = marginLeftDict[id] || "0px";
  return (
    <>
      <div className="timeline-bottom-sub" id={id} style={{ marginLeft: margin_left }}>
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
      <div className="timeline-bottom">
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
