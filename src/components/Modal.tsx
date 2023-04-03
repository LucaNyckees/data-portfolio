import React from "react";
import projContents from "../variables/projects";

function Modal(props: any) {
  const { show, closeModal } = props;
  let projContent = projContents[2];
  let lbls = projContent.labels;
  let modal: HTMLElement = document.getElementById("myModal") as HTMLElement;
  let git = projContent.git;
  let pres = projContent.pres;
  let report = projContent.report;
  let poster = projContent.poster;
  return (
    <>
      <div className={show ? "overlay" : "hide"} onClick={closeModal} />
      <div className={show ? "modal" : "hide"}>
        <button onClick={closeModal}>X</button>
        <h2>{projContent.title}</h2>
        <h3>{projContent.date}</h3>
        <button className="close">&times</button>
        <p>{projContent.description}</p>
        <img src={projContent.imageSource}></img>
        <div className="projButton">
          {!(git === "") && (
            <a href="{git}" target="_blank" className="proj-btn">
              GitHub
            </a>
          )}
          {!(report === "") && (
            <a href="{report}" target="_blank" className="proj-btn">
              Report
            </a>
          )}
          {!(pres === "") && (
            <a href="{pres}" target="_blank" className="proj-btn">
              Presentation
            </a>
          )}
          {!(poster === "") && (
            <a href="{poster}" target="_blank" className="proj-btn">
              Poster
            </a>
          )}
        </div>
      </div>
    </>
  );
}

export default Modal;
