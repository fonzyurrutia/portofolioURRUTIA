import React from "react";

import '../assets/styles/Project.scss';

//img src={Fonzy} alt="Fonzy"
function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
        <div className="project">
    <a href="https://your-project-link.com" target="_blank" rel="noreferrer">
        <img src={require('../assets/images/Metroidvania.png')} className="zoom" alt="Metroidvania project thumbnail" width="100%" />
    </a>
    <a href="https://your-project-link.com" target="_blank" rel="noreferrer">
        <h2>Metroidvania Game</h2>
    </a>
    <p>This project showcases a 2D Metroidvania-style game developed in Godot.</p>
</div>
            <div className="project">
    <a href="https://your-stickbender-project-link.com" target="_blank" rel="noreferrer">
        <img src={require('../assets/images/StickBender.png')} className="zoom" alt="StickBender project thumbnail" width="100%" />
    </a>
    <a href="https://your-stickbender-project-link.com" target="_blank" rel="noreferrer">
        <h2>StickBender Game</h2>
    </a>
    <p>This project showcases a fun and engaging game developed using Adobe Flash Animation.</p>
</div>
        </div>
    </div>
    );
}

export default Project;