import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Windows OS",
    "Networking Tools",
    "Hardware Maintenance Tools",
    "Anti-virus and Security Tools"
    
];

const labelsSecond = [
    "Godot",
    "PixiEditor",
    "Photoshop",
    "OpenAI"
];

const labelsThird = [
    "OpenAI",
    "PerplexityAI",
    "BardAI",
    "Github Copilot",
    "Google Colab",

];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Computer Systems Servicing</h3>
                    <p>I have been awarded the National Certificate II by TESDA. In completing the competency requirements under the Philippine TVET Competency Assessment and Certification System.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Basic Game Development</h3>
                    <p>Specialized in creating engaging 2D games using the Godot engine. With a strong focus on gameplay mechanics, character design, and level building, I have developed projects such as top-down dungeon crawlers and roguelikes.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>AI Tools and Integration</h3>
                    <p>I am proficient in leveraging AI tools to enhance productivity, creativity, and development workflows. My knowledge spans a variety of tools and platforms, allowing me to efficiently integrate AI-powered solutions into projects.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;