import GoBackButton from "../GoBackButton";
import { Navigate, useParams } from "react-router-dom";
import jobContents from "../../variables/jobs";

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
        {jobContent.job_description}
        <h3>Key-words</h3>
        <div className='job-labels'>
          {lbls.slice(0, 10).map((label, index) => (
            <label key={index}>{label}</label>
          ))}
        </div>
      </div>
    </>
  );
};

export default JobDetails;