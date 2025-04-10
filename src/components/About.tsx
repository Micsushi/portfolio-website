import '../assets/styles/About.scss';
import useAnimation from './useAnimation';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Box, useMediaQuery, useTheme } from '@mui/material';

// Sample images for sliders
const topSliderImages = [
  { src: '/path/to/dodgeball1.jpg', alt: 'Dodgeball tournament', caption: 'Big dodgeball' },
  { src: '/path/to/dodgeball2.jpg', alt: 'Team event', caption: 'Jim event' },
  { src: '/path/to/dodgeball3.jpg', alt: 'Championship', caption: 'M Tuttle' }
];

function About() {
  const h1Ref = useAnimation<HTMLHeadingElement>();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const renderSlider = (images: typeof topSliderImages, position: 'top-right' | 'bottom-left') => (
    <Carousel
      showArrows={true}
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
      className={`slider ${position}`}
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <button
          type="button"
          onClick={onClickHandler}
          title={label}
          className="slider-arrow prev"
        >
          &lt;
        </button>
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <button
          type="button"
          onClick={onClickHandler}
          title={label}
          className="slider-arrow next"
        >
          &gt;
        </button>
      )}
    >
      {images.map((image, index) => (
        <div key={index} className="slider-item">
          <img 
            src={image.src} 
            alt={image.alt} 
            className="slider-image"
          />
          <div className="slider-caption">
            <ul>
              <li>{image.caption}</li>
              {index === 0 && <li>● ●</li>} 
            </ul>
          </div>
        </div>
      ))}
    </Carousel>
  );

  return (
    <div className="container" id="about">
      <div className="about-container">
        <h1 className="header" ref={h1Ref}>About Me</h1>
        
        <div className="content-wrapper">
          <div className="slider-container top-right">
            {renderSlider(topSliderImages, 'top-right')}
          </div>

          <div className="text-content">
            <p>Hi there! :D</p>
            <p>
              I am Chinese but I grew up in South Africa! I am currently studying Computer Science at the
              University of Alberta. I'm also a Software Engineer Intern at INVIDI Technologies.
              Outside of work and school, I'm always on the move — whether that's on the dodgeball
              court, the soccer field, or in the kitchen experimenting with dishes from around the world.
            </p>
            <p>
              I thrive on trying new things and meeting new people. This explains why I've held five different student
              leadership positions and worked nine diverse jobs across industries. Everything from
              bartending to hardware repairs as a Geek Squad agent. Every experience has
              shaped how I approach problems and collaborate with others.
            </p>
            <p>
              In my free time, I work as a private tutor, build personal projects, and explore ways to use tech
              for good. All the projects I work on aim to make life easier — whether it's helping
              students study more effectively or making healthcare more accessible.
            </p>
            <p>
              Above all, I'm a lifelong learner and builder who loves connecting with others and
              bringing value wherever I can.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;