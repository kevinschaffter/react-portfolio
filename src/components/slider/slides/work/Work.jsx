import React from 'react';
import classes from './Work.module.scss';
import { carecloudSquare } from '../../../../images';

const Work = _ => (
  <div className={classes.container}>
    <h4>CURRENT WORK</h4>
    <div>
      <div className={classes.imageCrop}>
        <img className={classes.logo} src={carecloudSquare} alt="" />
      </div>
      <div className={classes.infoContainer}>
        <p>CareCloud - practice management / EHR suite</p>
        <p>Software Engineer II</p>
        <ul>
          <li>
            <span>
              Leading UI team in rebuilding CareCloud's next generation appointment scheduling system using React,
              GraphQL and Firebase in a micro-frontend architecture.
            </span>
          </li>
          <li>
            <span>
              Conducting code reviews and translating business requirements into actionable ticket items for frontend
              development team.
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Work;
