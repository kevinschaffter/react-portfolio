import React from 'react';
import { Fade } from 'react-reveal';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './About.module.scss';
import { Icons, Education, Work, RecentWork, Slider, Bio, Skills } from '../../components/index';
import { iconInfo } from './IconInfo';

const About = ({ handleMoreClick, setRef }) => (
  <div
    ref={(ref) => {
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
            work primarily in TypeScript and specialize in React.js.
          </h3>
        </div>
      </Fade>
      <Icons iconInfo={iconInfo} stagger down />
      <Slider>
        <RecentWork />
        <Work />
        <Skills />
        <Education />
        <Bio />
      </Slider>
      <Fade delay={1200}>
        <div tabIndex={0} role="button" className={classes.portfolioMore} onClick={() => handleMoreClick('portfolio')}>
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
