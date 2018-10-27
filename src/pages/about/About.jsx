import React, { Component } from 'react';
import classes from './About.module.css';
import test from '../../images/test.jpg';
import headshot from '../../images/headshot.jpg';
// import { faReact } from '@fortawesome/free-solid-svg-icons';
import Icons from './icons/Icons';
import { Fade } from 'react-reveal';

class About extends Component {
  render() {
    return (
      <div className={classes.container}>
        <div className={classes.about}>
          {/* <div className={classes.imgCrop}>
            <img src={headshot} />
          </div> */}
          <Fade delay="100">
            <div className={classes.textContainer}>
              <h1>Hi!</h1>
              <h3>
                I have a passion for crispy clean, beautiful web design that leads to results and a great user
                experience. I work primarily with React.js and am loving every minute of it.
              </h3>
            </div>
          </Fade>
          <Icons />
        </div>
        <div className={classes.imageContainer} />
      </div>
    );
  }
}

export default About;
