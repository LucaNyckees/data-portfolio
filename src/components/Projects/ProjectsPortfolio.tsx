import projContents from "../../variables/projects";
import Project from "./Project";

function PortfolioRow(indices: Array<number>) {
  let row_id = `projRow${Math.floor(indices[0] / 4)}`;
  return (
    <>
      <div className="row" id={row_id}>
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
        {PortfolioRow([0, 1, 2, 3])}
        {PortfolioRow([4, 5, 6, 7])}
        {PortfolioRow([8, 9, 10, 11])}
      </div>
    </>
  );
}
