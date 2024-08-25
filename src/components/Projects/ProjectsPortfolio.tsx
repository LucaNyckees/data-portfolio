import projContents from "../../variables/projects";
import Project from "./Project";

function PortfolioRow(indices: Array<number>) {
  // let row_id = `projRow${Math.floor(indices[0] / 4)}`;
  return (
    <>
      <div className="row">
        {indices.map(Project)}
      </div>
    </>
  );
}

export default function Portfolio(props: any) {
  let indices = Array.from(projContents.keys());
  return (
    <>
      <div id="allProjects">
        <div className="public-projects">
          <h3>Public projects</h3>
          {PortfolioRow([0, 1, 2, 3, 4, 5, 6,])}
        </div>
        <div className="private-projects">
          <h3>Private projects</h3>
          {PortfolioRow([7, 8, 9, 10,])}
        </div>
      </div>
    </>
  );
}
