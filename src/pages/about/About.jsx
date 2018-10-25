import React, { Component } from 'react';
import classes from './About.module.css';
import test from '../../images/test.jpg';
import headshot from '../../images/headshot.jpg';

class About extends Component {
  render() {
    return (
      <div className={classes.container}>
        <div className={classes.about}>
          <div className={classes.imgCrop}>
            <img src={headshot} />
          </div>
          <div className={classes.textContainer}>
            <h2>
              I'm passionate about crispy clean, beautiful web design that leads to results and a great user experience.
            </h2>
          </div>
        </div>
        <div className={classes.imageContainer} />
      </div>
    );
  }
}

export default About;
