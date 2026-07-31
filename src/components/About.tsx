import { useEffect, useRef } from 'react';
import '../assets/styles/About.scss';
import useAnimation from './useAnimation';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
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
  const textContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textContentRef.current) {
      const paragraphs = textContentRef.current.querySelectorAll('p');
      
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
        word.classList.remove('glow-1', 'glow-2', 'glow-3', 'glow-4', 'glow-5');
      });

      if (words[currentIndex]) words[currentIndex].classList.add('glow-1');
      if (words[currentIndex + 1]) words[currentIndex + 1].classList.add('glow-2');
      if (words[currentIndex + 2]) words[currentIndex + 2].classList.add('glow-3');
      if (words[currentIndex + 3]) words[currentIndex + 3].classList.add('glow-4');
      if (words[currentIndex + 4]) words[currentIndex + 4].classList.add('glow-5');

      currentIndex = (currentIndex + 1) % Math.max(1, words.length - 4);
    };

      const intervalId = setInterval(highlightWords, 100);

      return () => clearInterval(intervalId);
    }
  }, []);

  return (
    <div className="container" id="about">
      <div className="about-container">
        <h1 className="header" ref={h1Ref}>About Me</h1>
        
        <div className="text-content" ref={textContentRef}>
          <p>Hi! I'm <b>Michael</b> from South Africa!</p>
          <p>
            I am currently studying Computer Science at the <b>University of Alberta</b>. I'm also a Software Engineer Intern at <b> INVIDI Technologies</b>.
            Outside of work and school, you'll usually find me playing dodgeball or soccer, or trying
            a new recipe.
          </p>
          <p>
            I've worked in bartending, hardware repair, and business management. Each job taught me
            a different way to solve problems and work with people.
          </p>
          <p>
            I like learning by building and meeting people who care about their work.
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
