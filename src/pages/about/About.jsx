import React from 'react';
import classes from './About.module.css';
import { Icons, Education, Work, Slider, Bio } from '../../components/index';
import { Fade } from 'react-reveal';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const About = ({ handleMoreClick, setRef }) => {
  return (
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
              I have a passion for crispy clean, beautiful web design that leads to results and a great user experience.
              I work primarily in JavaScript and specialize in React.js.
            </h3>
          </div>
        </Fade>
        <Icons />
        <Slider>
          <Work />
          <Education />
          <Bio />
        </Slider>
        <Fade delay={1200}>
          <div className={classes.portfolioMore} onClick={_ => handleMoreClick('portfolio')}>
            <h4>PORTFOLIO</h4>
            <FontAwesomeIcon icon={faArrowDown} />
          </div>
        </Fade>
      </div>
      <div className={classes.imageContainer} />
    </div>
  );
};

export default About;
