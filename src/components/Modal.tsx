import React, { useEffect } from 'react';
import projContents from "../variables/projects";
import { MediaButton } from './AboutHead';

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

function Modal(props: any) {
  const { index, show, closeModal } = props;
  let projContent = projContents[index];
  let lbls = projContent.labels;
  let git = projContent.git;
  let pres = projContent.pres;
  let report = projContent.report;
  let poster = projContent.poster;
  const leftMargin = (-((index % 4) + 0.5) * 74.6) / 4;
  const lock =
    [4, 5, 6, 7].indexOf(index) > -1 ? (
      <LockSymbol size={16}></LockSymbol>
    ) : (
      <></>
    );
  const w = window.innerWidth;
  useEffect(() => {
    // Add or remove 'no-scroll' class to body based on the modal visibility
    if (show) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup: remove the class when the component is unmounted
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [show]);
  const originalWidthString = projContent.rel_height_open;
  const numericValue = parseFloat(originalWidthString);
  const viewportHeight = window.innerHeight;
  const screenCoverageProportion = viewportHeight / screen.height;
  const newNumericValue = numericValue * screenCoverageProportion;
  const newHeightString = `${newNumericValue}%`;
  return (
    <>
      <div className={show ? "overlay" : "hide"} onClick={closeModal} />
      <div
        className={show ? "modal" : "hide"} id='modal'
      // style={
      //   w > 425
      //     // ? { marginLeft: `${leftMargin}%`, marginTop: `${topMargin}px` }
      //     // : { marginLeft: "-2%", marginTop: "-64vh" }
      //     ? { marginLeft: `${leftMargin}vw` }
      //     : { marginLeft: "-2%" }
      // }
      >
        <h2>{projContent.title}</h2>
        <div className='modal-left-and-right'>
          <div className='modal-left'>
            <button type="button" className="btn-close" onClick={closeModal}>
              <span className="icon-cross"></span>
              <span className="visually-hidden">Close</span>
            </button>
            <h3>Description</h3>
            <p className="project-description-text">{projContent.description}</p>
            <h3>Implementation</h3>
            <p className="project-description-text">{projContent.implementation}</p>
            <h3>Resources</h3>
            <div id="modalButtons">
              {[4, 5, 6, 7].indexOf(index) > -1 ? (
            <p>This is a private project - don't hesitate to contact me for more details. {lock}</p>
        ) : null}
              {!(git === "") && git !== "private" && (
                MediaButton(git, "fa fa-github")
              )}
              {/* {git === "private" && (
            <a target="_blank" className="proj-btn">
              GitHub <LockSymbol size={12}></LockSymbol>
            </a>
          )} */}
              {!(report === "") && (
                MediaButton(report, "fa fa-file-text")
              )}
              {!(pres === "") && (
                MediaButton(pres, "fa fa-person-chalkboard")
              )}
              {!(poster === "") && (
                MediaButton(poster, "fa fa-image")
              )}
            </div>
          </div>
          <div className='modal-right'>
            {/* <h3>Period : {projContent.date}</h3> */}
            <div className='modal-labels'>
              {lbls.length > 0 ? <label>{lbls[0]}</label> : null}
              {lbls.length > 1 ? <label>{lbls[1]}</label> : null}
              {lbls.length > 2 ? <label>{lbls[2]}</label> : null}
              {lbls.length > 3 ? <label>{lbls[3]}</label> : null}
              {lbls.length > 4 ? <label>{lbls[4]}</label> : null}
            </div>
            <img src={projContent.imageSource}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
