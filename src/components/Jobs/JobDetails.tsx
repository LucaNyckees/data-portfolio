import GoBackButton from "../GoBackButton";
import { Navigate, useParams } from "react-router-dom";
import jobContents from "../../variables/jobs";

interface JobContent {
  title: string;
  description: string;
  href: string;
}

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
  const lbls = jobContent.tags

  return (
    <>
      <GoBackButton />
      <div className='job-details-container'>
        <h2>{jobContent.title}</h2>
        <h4>{jobContent.company}</h4>
        <h3>Company Description</h3>
        <p>{jobContent.company_description}</p>
        <a className='learn-more' href={jobContent.href} target='blank'>Learn more</a>
        <h3>Job Description</h3>
        <p>{jobContent.job_description}</p>
        <h3>Key-words</h3>
        <div className='job-labels'>
          {lbls.length > 0 ? <label>{lbls[0]}</label> : null}
          {lbls.length > 1 ? <label>{lbls[1]}</label> : null}
          {lbls.length > 2 ? <label>{lbls[2]}</label> : null}
          {lbls.length > 3 ? <label>{lbls[3]}</label> : null}
          {lbls.length > 4 ? <label>{lbls[4]}</label> : null}
          {lbls.length > 5 ? <label>{lbls[5]}</label> : null}
          {lbls.length > 6 ? <label>{lbls[6]}</label> : null}
        </div>
      </div>
    </>
  );
};

export default JobDetails;