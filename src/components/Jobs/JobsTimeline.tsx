import { useState } from 'react';
import Job from "./Job"
import jobContents from '../../variables/jobs';


function Timeline() {
  const [activeJob, setActiveJob] = useState();

  return (
    <>
      {jobContents.map((job, index) => (
        <Job
          key={index}
          index={index}
          isActive={index === activeJob}
        />
      ))}
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