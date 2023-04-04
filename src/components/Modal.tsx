import React from "react";
import projContents from "../variables/projects";

function Modal(props: any) {
  const { index, show, closeModal } = props;
  let projContent = projContents[index];
  let lbls = projContent.labels;
  let git = projContent.git;
  let pres = projContent.pres;
  let report = projContent.report;
  let poster = projContent.poster;
  const leftMargin = (-((index % 4) + 0.5) * 74.6) / 4;
  const topMargin = -(344 * Math.floor(index / 4)) + 160;

  return (
    <>
      <div className={show ? "overlay" : "hide"} onClick={closeModal} />
      <div
        className={show ? "modal" : "hide"}
        style={{ marginLeft: `${leftMargin}%`, marginTop: `${topMargin}px` }}
      >
        <h2>{projContent.title}</h2>
        <h3>{projContent.date}</h3>
        <button className="close" onClick={closeModal}>
          x
        </button>
        <p>{projContent.description}</p>
        <img src={projContent.imageSource}></img>
        <div className="projButton">
          {!(git === "") && (
            <a href={git} target="_blank" className="proj-btn">
              GitHub
            </a>
          )}
          {!(report === "") && (
            <a href={report} target="_blank" className="proj-btn">
              Report
            </a>
          )}
          {!(pres === "") && (
            <a href={pres} target="_blank" className="proj-btn">
              Presentation
            </a>
          )}
          {!(poster === "") && (
            <a href={poster} target="_blank" className="proj-btn">
              Poster
            </a>
          )}
        </div>
        <div>
          {lbls.length > 0 ? <label>#{lbls[0]}</label> : null}
          {lbls.length > 1 ? <label>#{lbls[1]}</label> : null}
          {lbls.length > 2 ? <label>#{lbls[2]}</label> : null}
          {lbls.length > 3 ? <label>#{lbls[3]}</label> : null}
          {lbls.length > 4 ? <label>#{lbls[4]}</label> : null}
        </div>
      </div>
    </>
  );
}

export default Modal;
