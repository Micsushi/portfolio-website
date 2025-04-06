import { useEffect, useRef, useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import 'animate.css';
import selfie from "../assets/images/selfie.jpg";
import '../assets/styles/Main.scss';

function Main() {
  const videoRef = useRef<HTMLVideoElement>(null); 
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

    const handleVideoPlay = () => {
      if (videoRef.current) {
        videoRef.current.play().catch(error => {
          console.log('Autoplay prevented:', error);
        });
      }
    };

    handleVideoPlay();
  }, []);

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 6;
      videoRef.current.play().catch(error => {
        console.log('Video replay failed:', error);
      });
    }
  };

  return (
    <div className="container" id="home">
      <div className="about-section">
        <video
          ref={videoRef}
          className="video-background"
          autoPlay={!isIOS}
          muted
          playsInline
          onEnded={handleVideoEnd}
          onLoadedMetadata={(e) => {
            e.currentTarget.currentTime = 2.5;
          }}
          onCanPlay={(e) => {
            if (e.currentTarget.currentTime < 2.5) {
              e.currentTarget.currentTime = 2.5;
            }
          }}
          preload="auto"
          webkit-playsinline="true"
          x-webkit-airplay="allow" 
        >
          <source src="/videos/bg-video.mp4" type="video/mp4" />
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