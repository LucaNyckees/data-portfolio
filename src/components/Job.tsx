import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import epfl_logo from "../../images/job_logos/epfl.png";
import quanthome_logo from "../../images/job_logos/quanthome.svg";


const jobs = [
    {
        title: "Teaching Assistant",
        text: "Department of Mathematics, EPFL",
        dates: "Sept. 2019 - June 2022",
        href: "https://www.epfl.ch/schools/sb/research/math/",
        imageSource: epfl_logo,
    },
    {
        title: "Data Science Intern",
        text: "Laboratory for Topology and Neuroscience, EPFL",
        dates: "Dec. 2020 - July 2021",
        href: "https://www.epfl.ch/labs/hessbellwald-lab/",
        imageSource: epfl_logo,
    },
    {
        title: "Research Developer",
        text: "Laboratory for Topology and Neuroscience, EPFL",
        dates: "August 2021 - Feb. 2022",
        href: "https://www.epfl.ch/labs/hessbellwald-lab/",
        imageSource: epfl_logo,
    },
    {
        title: "Data Scientist",
        text: "Quanthome, Lausanne, Switzerland",
        dates: "August 2022 - present",
        href: "https://www.quanthome.ch/",
        imageSource: quanthome_logo,
    },
];

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

    let job = jobs[index];
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
                style={{ border: isActive || isHovered ? '3px solid #4d4b4b' : 'none' }}
            />
            <h2 style={{ fontWeight: isActive ? 'bold' : 'normal' }}>{job.title}</h2>
            <p style={{ paddingLeft: "0px", fontWeight: isActive ? 'bold' : 'normal' }}>
                <i>{job.dates}</i>
            </p>
        </div>
    );
}