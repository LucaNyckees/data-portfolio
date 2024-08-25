import colors from "../../variables/tagcolors";
import { useState } from "react";
import projContents from "../../variables/projects";
import { useNavigate } from "react-router-dom";

function Label(tag: string) {
    let val = "black";
    for (let key in colors) {
        if (key === tag) {
            val = colors[key];
        }
    }
    return <label>{tag}</label>;
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

export default function Project(index: number) {
    let project = projContents[index];
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    let proj_id = `proj${index}`;
    // const lock =
    //     [4, 5, 6, 7].indexOf(index) > -1 ? (
    //         <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="16"
    //             height="16"
    //             fill="currentColor"
    //             className="bi bi-lock"
    //             viewBox="0 0 16 16"
    //             color="rgba(11, 8, 24, 0.606)"
    //         >
    //             <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
    //         </svg>
    //     ) : (
    //         <></>
    //     );
    const id = `myProject${index}`;
    return (
        <>
            <button
                id={proj_id}
                type="button"
                className="about-col"
                style={{ position: 'relative' }}
                onClick={() => navigate(`/portfolio/${index}`)}
            >
                <p id={proj_id + "P"}>
                    {project.title}
                    {/* {lock} */}
                </p>
                <img
                    src={project.imageSource}
                    style={{ width: project.rel_width }}
                ></img>
                <div className="labels-front">
                    {LabelList(project.labels, project.cut)}
                </div>
            </button>
        </>
    );
}