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
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Detect iOS
    setIsIOS(/iPad|iPhone|iPod/.test(navigator.userAgent) || 
             (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));

    const gitElement = document.querySelector('.git-icon');
    const linkElement = document.querySelector('.linkedin-icon');
    
    setTimeout(() => {
      gitElement?.classList.add('animate__animated', 'animate__flash');
      linkElement?.classList.add('animate__animated', 'animate__flash');
    }, 2000);

    const handleFirstVideoPlay = () => {
      if (firstVideoRef.current) {
        firstVideoRef.current.play().catch(error => {
          console.log('Autoplay prevented:', error);
        });
      }
    };

    handleFirstVideoPlay();
  }, [showSecondVideo]);

  const handleFirstVideoEnd = () => {
    setShowSecondVideo(true);
    secondVideoRef.current?.play()?.catch(error => {
      console.log('Second video play failed:', error);
    });
  };

  return (
    <div className="container" id="home">
      <div className="about-section">
        <video
          ref={firstVideoRef}
          className="video-background"
          autoPlay={!isIOS}
          muted
          playsInline
          onEnded={handleFirstVideoEnd}
          style={{ display: showSecondVideo ? 'none' : 'block' }}
          preload="auto"
          webkit-playsinline="true"
          x-webkit-airplay="allow" 
        >
          <source src="/videos/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <video
          ref={secondVideoRef}
          className="video-background"
          autoPlay={false} 
          muted
          playsInline
          loop
          style={{ display: showSecondVideo ? 'block' : 'none' }}
          preload="auto"
          webkit-playsinline="true"
          x-webkit-airplay="allow"
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