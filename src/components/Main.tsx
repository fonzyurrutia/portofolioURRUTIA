import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../assets/styles/Main.scss';

import Fonzy from '../assets/images/Fonzy.png';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={Fonzy} alt="Fonzy" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/fonzyurrutia" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.facebook.com/fonzykyle.urrutia" target="_blank" rel="noreferrer"><FacebookIcon/></a>
          </div>
          <h1>Fonzy Urrutia</h1>
          <p>Hi, I'm Fonzy Kyle Urrutia, an aspiring IT professional currently pursuing my studies in Information Technology. With a deep passion for technology, problem-solving, and continuous learning, I am driven to explore new horizons in the tech world.</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/fonzyurrutia" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.facebook.com/fonzykyle.urrutia" target="_blank" rel="noreferrer"><FacebookIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;