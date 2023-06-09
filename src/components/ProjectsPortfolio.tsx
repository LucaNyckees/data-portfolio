import projects from "../variables/thumnailprojects";
import { displayProj, closeProj } from "../functions/ProjectsPortfolio";
import colors from "../variables/tagcolors";
import { useState } from "react";

function ProjChoiceButtons() {
  return (
    <>
      <div className="projLabelsChoice" id="projLabelsChoice">
        <a type="button" id="projLabelShowAll">
          Show all
        </a>
        <a type="button" id="projLabelShow0">
          Topological Machine Learning
        </a>
        <a type="button" id="projLabelShow1">
          Financial Data Analysis
        </a>
        <a type="button" id="projLabelShow2">
          Statistical Machine Learning
        </a>
      </div>
    </>
  );
}

function Label(tag: string) {
  let val = "black";
  for (let key in colors) {
    if (key === tag) {
      val = colors[key];
    }
  }
  return <label style={{ backgroundColor: val }}>#{tag}</label>;
}

function LabelList(tags: Array<string>, cut: number) {
  return (
    <>
      <div className="labels-front">{tags.slice(0, cut).map(Label)}</div>
      <div className="labels-front">
        {tags.slice(cut, tags.length).map(Label)}
      </div>
    </>
  );
}

function Project(index: number) {
  let project = projects[index];
  let proj_id = `proj${index}`;
  var lock =
    [4, 5, 6, 7].indexOf(index) > -1 ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-lock"
        viewBox="0 0 16 16"
        color="rgba(11, 8, 24, 0.606)"
      >
        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
      </svg>
    ) : (
      <></>
    );
  return (
    <button
      id={proj_id}
      type="button"
      className="about-col"
      onClick={() => displayProj(index)}
      style={{ width: "200px" }}
    >
      <p>
        {project.name}
        {lock}
      </p>
      <img src={project.sourceImage} style={{ width: project.rel_width }}></img>
      <div className="labels-front">
        {LabelList(project.labels, project.cut)}
      </div>
    </button>
  );
}

function BoardRow(indices: Array<number>) {
  let row_id = `projRow${Math.floor(indices[0] / 4)}`;
  return (
    <>
      <div className="row" id={row_id}>
        {indices.map(Project)}
      </div>
    </>
  );
}

function Board() {
  let indices = Array.from(projects.keys());
  return (
    <>
      <div id="allProjects">
        {BoardRow([0, 1, 2, 3])}
        {BoardRow([4, 5, 6, 7])}
        {BoardRow([8, 9, 10, 11])}
      </div>
    </>
  );
}

export { Board, ProjChoiceButtons };
