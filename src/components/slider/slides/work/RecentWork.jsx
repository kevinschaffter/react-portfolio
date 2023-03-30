import React from 'react';
import classes from './Work.module.scss';
import { rbi, optimizeHealth } from '../../../../images';

const Work = () => (
  <div className={classes.container}>
    <h4>RECENT WORK</h4>
    <div>
      <div className={classes.rbiImageCrop}>
        <img className={classes.optimizeLogo} src={optimizeHealth} alt="" />
      </div>
      <div className={classes.infoContainer}>
        <p>Optimize Health</p>
        <p className={classes.year}>2021 - CURRENT</p>
        <p>Senior Software Engineer</p>
        <ul>
          <li>
            <span>
              Building a next generation remote patient monitoring platform using React, Typescript, GraphQL, Golang and
              AWS.
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <div className={classes.rbiImageCrop}>
        <img className={classes.rbiLogo} src={rbi} alt="" />
      </div>
      <div className={classes.infoContainer}>
        <p>Restaurant Brands International</p>
        <p className={classes.subHeader}>BURGER KING® | Tim Hortons® | Popeyes®</p>
        <p className={classes.year}>2020 - 2021</p>
        <p>Engineering Manager</p>
        <ul>
          <li>
            <span>Leading development on the loyalty feature team in support of 20+ million monthly active users.</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Work;
