import React from 'react';
import classes from './Work.module.scss';
import { carecloudSquare, auditionCafe } from '../../../../images';

const Work = () => (
  <div className={classes.container}>
    <h4>WORK CONTINUED</h4>
    <div>
      <div className={classes.imageCrop}>
        <img className={classes.carecloudLogo} src={carecloudSquare} alt="" />
      </div>
      <div className={classes.infoContainer}>
        <p>CareCloud</p>
        <p className={classes.year}>2018 - 2019</p>
        <p>Software Engineer II</p>
        <ul>
          <li>
            <span>
              Led UI feature team in building appointment scheduling system using React, GraphQL and Firebase in a
              micro-frontend architecture.
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <div className={classes.auditionCafeCrop}>
        <img className={classes.auditionCafeLogo} src={auditionCafe} alt="" />
      </div>
      <div className={classes.infoContainer}>
        <p>AuditionCafe.com</p>
        <p className={classes.year}>2016 - PRESENT</p>
        <p>Founder</p>
        <ul>
          <li>
            <span>
              Launched and scaled classical music job board to 25,000 monthly unique visitors in 128 countries within
              one year.
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Work;
