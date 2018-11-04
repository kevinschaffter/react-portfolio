import React from 'react';
import classes from './Work.module.scss';
import { carecloudSquare, auditionCafe } from '../../../../images';

const Work = _ => {
  return (
    <div className={classes.container}>
      <h4>RECENT WORK</h4>
      <div>
        <img className={classes.logo} src={carecloudSquare} alt="" />
        <div className={classes.infoContainer}>
          <p>CareCloud - Associate Software Engineer</p>
          <p>App development utilizing React and GraphQL</p>
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
