import React from 'react';
import projContents from "../../variables/projects";
import { MediaButton, MediaButtonBlocked } from '../AboutHead';
import { Navigate, useParams } from "react-router-dom";
import GoBackButton from '../GoBackButton';

function LockSymbol(props: any) {
  const size = props.size;
  const viewBoxSize = `0 0 ${size} ${size}`;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      // fill="currentColor"
      className="bi-bi-lock"
      viewBox={viewBoxSize}
      color="rgba(11, 8, 24, 0.606)"
    >
      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
    </svg>
  );
}

const ProjectDetails: React.FC = () => {
  const { index } = useParams<{ index: string }>();

  if (index === undefined) {
    return <Navigate to="/" />;
  }

  const portfolioIndex = parseInt(index, 10);

  if (isNaN(portfolioIndex) || portfolioIndex < 0 || portfolioIndex >= projContents.length) {
    return <Navigate to="/" />;
  }

  const projContent = projContents[portfolioIndex];
  let lbls = projContent.labels;
  let git = projContent.git;
  let pres = projContent.pres;
  let report = projContent.report;
  let poster = projContent.poster;
  const lock =
    [4, 5, 6, 7].indexOf(portfolioIndex) > -1 ? (
      <LockSymbol size={16}></LockSymbol>
    ) : (
      <></>
    );

  return (
    <>
      <div
        className="modal" id='modal'
      >
        <div className="modal-header">
          <GoBackButton />
          <h2>{projContent.title}</h2>
        </div>
        <div className='modal-left-and-right'>
          <div className='modal-left'>
            <h3>Description</h3>
            <p className="modal-description-text">{projContent.description}</p>
            <h3>Implementation</h3>
            <p className="modal-description-text">{projContent.implementation}</p>
            <h3>Resources</h3>
            {[4, 5, 6, 7].indexOf(portfolioIndex) > -1 ? (
              <p>This is a private project - don't hesitate to contact me for more details. {lock}</p>
            ) : null}
            <div id="modalButtons">
              {!(git === "") && git !== "private" && (
                MediaButton(git, "fa fa-github")
              )}
              {(git === "private") && (
                MediaButtonBlocked(git, "fa fa-github")
              )}
              {!(report === "") && (
                MediaButton(report, "fa fa-file-text")
              )}
              {!(pres === "") && (
                MediaButton(pres, "fa fa fa-image")
              )}
              {!(poster === "") && (
                MediaButton(poster, "fa fa-image")
              )}
            </div>
          </div>
          <div className='modal-right'>
            <h3>Key-words</h3>
            <div className='modal-labels'>
              {lbls.length > 0 ? <label>{lbls[0]}</label> : null}
              {lbls.length > 1 ? <label>{lbls[1]}</label> : null}
              {lbls.length > 2 ? <label>{lbls[2]}</label> : null}
              {lbls.length > 3 ? <label>{lbls[3]}</label> : null}
              {lbls.length > 4 ? <label>{lbls[4]}</label> : null}
            </div>
            <h3>Snapshot</h3>
            <img src={projContent.imageSource}></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
