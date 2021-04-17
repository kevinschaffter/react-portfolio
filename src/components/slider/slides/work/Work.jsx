import React from 'react';
import classes from './Work.module.scss';
import { carecloudSquare, rbi } from '../../../../images';

const Work = () => (
  <div className={classes.container}>
    <h4>RECENT WORK</h4>
    <div>
      <div className={classes.rbiImageCrop}>
        <img className={classes.rbiLogo} src={rbi} alt="" />
      </div>
      <div className={classes.infoContainer}>
        <p>Restaurant Brands International</p>
        <p className={classes.subHeader}>BURGER KING® | Tim Hortons® | Popeyes®</p>
        <p className={classes.year}>2019 - CURRENT</p>
        <p>Lead Senior Software Engineer</p>
        <ul>
          <li>
            <span>Leading development on the loyalty feature team in support of 20+ million monthly active users.</span>
          </li>
        </ul>
      </div>
    </div>
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
  </div>
);

export default Work;
