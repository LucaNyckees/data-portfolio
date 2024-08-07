import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import jobContents from "../../variables/jobs";

interface JobProps {
    index: number;
    isActive: boolean;
}

export default function Job({ index, isActive }: JobProps) {
    const [show, setShow] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
    const marginLeftDict = {
        job1: "0px;",
        job2: "max(-10.4vh, -100px);",
        job3: "max(-10.4vh, -100px);",
    };
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    let job = jobContents[index];
    let id = `job${index}`;
    let margin_left = marginLeftDict[id as keyof typeof marginLeftDict] || "0px";

    return (
        <div
            className="timeline-sub"
            id={id}
            style={{ marginLeft: margin_left }}
        >
            <img
                className="timeline-job-logo"
                src={job.imageSource}
                onClick={() => navigate(`/job/${index}`)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ border: isActive || isHovered ? '2px solid #4d4b4b' : '1px solid #4d4b4b' }}
            />
            <h2 style={{ fontWeight: isActive ? 'bold' : 'normal' }}>{job.title}</h2>
            <p style={{ paddingLeft: "0px", fontWeight: isActive ? 'bold' : 'normal' }}>
                <i>{job.dates}</i>
            </p>
        </div>
    );
}