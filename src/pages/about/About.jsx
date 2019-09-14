import React from 'react';
import classes from './About.module.scss';
import { Icons, Education, Work, Slider, Bio } from '../../components/index';
import { Fade } from 'react-reveal';
import { iconInfo } from './IconInfo';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = ({ handleMoreClick, setRef, isMobileDevice }) => (
  <div
    ref={ref => {
      setRef({ ref, page: 'about' });
    }}
    className={classes.container}
  >
    <div className={classes.about}>
      <Fade delay={100}>
        <div className={classes.textContainer}>
          <h1>Hi!</h1>
          <h3>
            I have a passion for crispy clean code and beautiful web design that leads to a great user experience. I
            work primarily in JavaScript and specialize in React.js.
          </h3>
        </div>
      </Fade>
      <Icons iconInfo={iconInfo} stagger down />
      {!isMobileDevice && (
        <Slider>
          <Work />
          <Education />
          <Bio />
        </Slider>
      )}
      <Fade delay={1200}>
        <div className={classes.portfolioMore} onClick={_ => handleMoreClick('portfolio')}>
          <FontAwesomeIcon icon={faArrowDown} />
        </div>
      </Fade>
    </div>
    <Fade>
      <div className={classes.imageContainer} />
    </Fade>
  </div>
);

export default About;
