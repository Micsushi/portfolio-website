import { useEffect, useRef, useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import 'animate.css';
import selfie from "../assets/images/selfie.jpg";
import '../assets/styles/Main.scss';

function Main() {
  const firstVideoRef = useRef<HTMLVideoElement>(null); 
  const secondVideoRef = useRef<HTMLVideoElement>(null); 
  const [showSecondVideo, setShowSecondVideo] = useState(false);

  useEffect(() => {
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
    }, 2000);
  }, []);

  const handleFirstVideoEnd = () => {
    setShowSecondVideo(true);
    if (secondVideoRef.current) { 
      secondVideoRef.current.play(); 
    }
  };

  return (
    <div className="container" id="home">
      <div className="about-section">
        <video
          ref={firstVideoRef}
          className="video-background"
          autoPlay
          muted
          onEnded={handleFirstVideoEnd}
          style={{ display: showSecondVideo ? 'none' : 'block' }} 
        >
          <source src="/videos/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <video
          ref={secondVideoRef}
          className="video-background"
          muted
          loop
          style={{ display: showSecondVideo ? 'block' : 'none' }} 
        >
          <source src="/videos/loop-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="image-wrapper">
          <img className="animate__animated animate__lightSpeedInLeft" src={selfie} alt="Avatar" />
        </div>
        <div className="content">
          <h1 className="name animate__animated animate__lightSpeedInRight">Michael Shi</h1>
          <p className="title animate__animated animate__lightSpeedInRight">Full Stack Developer</p>
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