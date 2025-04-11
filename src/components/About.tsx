import { useEffect, useRef } from 'react';
import '../assets/styles/About.scss';
import useAnimation from './useAnimation';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useMediaQuery, useTheme } from '@mui/material';
import nathacks from '../assets/images/Nathacks 2024.jpg';
import allstar from '../assets/images/all stars grp.jpg';
import campus from '../assets/images/campus cup 2024.jpg';
import dodgefest from '../assets/images/dodgefest 2025.jpg';
import food from '../assets/images/food.jpg';
import dodgetoberfest from '../assets/images/dodgetoberfest 2024.jpg';

const sliderImages = [
  { src: dodgetoberfest, alt: 'Dodgetoberfest team photo', caption: 'Winning Dodgetoberfest!' },
  { src: nathacks, alt: 'Nathacks group photo', caption: 'Winning Nathacks!' },
  { src: allstar, alt: 'Managing the All Stars team', caption: 'Managing for All Stars!' },
  { src: campus, alt: 'Campus Cup Team photo', caption: 'Campus Cup!' },
  { src: dodgefest, alt: 'Dodgefest Team photo', caption: 'Dodgefest!' },
  { src: food, alt: 'Grabbing food with friends', caption: 'Yummm' },
];

function About() {
  const h1Ref = useAnimation<HTMLHeadingElement>();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const textContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textContentRef.current) {
      const paragraphs = textContentRef.current.querySelectorAll('p');
      
      // Wrap each word in a span
      paragraphs.forEach((paragraph) => {
        const words = paragraph.textContent?.split(' ') || [];
        paragraph.innerHTML = words.map(word => 
          `<span class="word">${word}</span>`
        ).join(' ');
      });

      const words = Array.from(textContentRef.current.querySelectorAll('.word'));
      let currentIndex = 0;

      const highlightWords = () => {
        words.forEach(word => {
          word.classList.remove('glow-1', 'glow-2', 'glow-3');
        });

        if (words[currentIndex]) words[currentIndex].classList.add('glow-1');
        if (words[currentIndex + 1]) words[currentIndex + 1].classList.add('glow-2');
        if (words[currentIndex + 2]) words[currentIndex + 2].classList.add('glow-3');

        currentIndex = (currentIndex + 1) % Math.max(1, words.length - 2);
      };

      const intervalId = setInterval(highlightWords, 300);

      return () => clearInterval(intervalId);
    }
  }, []);

  return (
    <div className="container" id="about">
      <div className="about-container">
        <h1 className="header" ref={h1Ref}>About Me</h1>
        
        <div className="text-content" ref={textContentRef}>
          <p>Hi! I'm Michael from South Africa!</p>
          <p>
            I am currently studying Computer Science at the
            University of Alberta. I'm also a Software Engineer Intern at INVIDI Technologies.
            Outside of work and school, I'm always on the move — whether that's on the dodgeball
            court, the soccer field, or in the kitchen experimenting with dishes from around the world.
          </p>
          <p>
            I thrive on trying new things and meeting new people. This explains why I've worked across multiple
            industries. Everything from bartending to hardware repairs to business management. Every experience has
            shaped how I approach problems and collaborate with others.
          </p>
          <p>
            Above all, I'm a lifelong learner and builder who loves connecting with others and
            bringing value wherever I can.
          </p>
        </div>

        <div className="full-width-slider-container">
          <Carousel
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}
            className="full-width-slider"
            renderIndicator={(onClickHandler, isSelected, index, label) => {
              return (
                <li
                  className={`dot ${isSelected ? 'selected' : ''}`}
                  onClick={onClickHandler}
                  onKeyDown={onClickHandler}
                  value={index}
                  key={index}
                  role="button"
                  tabIndex={0}
                  aria-label={`${label} ${index + 1}`}
                />
              );
            }}
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
            {sliderImages.map((image, index) => (
              <div key={index} className="slider-item">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="slider-image"
                />
                <div className="slider-caption">
                  <p>{image.caption}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default About;