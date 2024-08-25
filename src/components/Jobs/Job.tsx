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
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const job = jobContents[index];
    const id = `job${index}`;
    const sub_id = `jobsub${index}`;

    return (
        <div
            className="timeline-sub"
            id={id}
        >
            <img
                className="timeline-job-logo"
                src={job.imageSource}
                id={sub_id}
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