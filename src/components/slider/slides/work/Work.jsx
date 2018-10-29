import React from 'react';
import classes from './Work.module.css';
import { carecloudSquare, auditionCafe } from '../../../../images';

const Work = _ => {
  return (
    <div className={classes.container}>
      <h4>WORK</h4>
      <div>
        <img className={classes.logo} src={carecloudSquare} alt="" />
        <div className={classes.infoContainer}>
          <p>CareCloud - Associate Software Engineer</p>
          <p>Application Development utilizing React and GraphQL</p>
        </div>
      </div>
      <div>
        <img className={classes.logo} src={auditionCafe} alt="" />
        <p>AuditionCafe.Com - Creator</p>
      </div>
    </div>
  );
};

export default Work;
