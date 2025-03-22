import React, { useEffect } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import 'animate.css';
import '../assets/styles/Main.scss';

function Main() {
  const image = process.env.PUBLIC_URL + '/selfie.jpg';

  // Add animation classes after a delay
  useEffect(() => {
    const titleElement = document.querySelector('.title');
    setTimeout(() => {
      if (titleElement) {
        titleElement.classList.add('animate__animated', 'animate__flash');
      }
    }, 1000);
    const gitElement = document.querySelector('.git-icon');
    setTimeout(() => {
      if (gitElement) {
        gitElement.classList.add('animate__animated', 'animate__flash');
      }
    }, 2000);
    const linkElement = document.querySelector('.linkedin-icon');
    setTimeout(() => {
      if (linkElement) {
        linkElement.classList.add('animate__animated', 'animate__flash');
      }
    }, 3000);
  }, []);

  return (
    <div className="container" id="home">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={image} alt="Avatar" />
        </div>
        <div className="content">
          <h1 className="name animate__animated animate__lightSpeedInRight">Michael Shi</h1>
            <p className="title">Full Stack Developer</p>
          <div className="title-container">
            <div className="social_icons">
              <a className="git-icon" href="https://github.com/micsushi" target="_blank" rel="noreferrer"><GitHubIcon/></a>
              <a className="linkedin-icon" href="https://www.linkedin.com/in/wjshi/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;