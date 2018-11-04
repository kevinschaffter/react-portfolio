import React from 'react';
import classes from './Education.module.scss';
import { iu, wyncode, yale } from '../../../../images';

const Education = _ => {
  return (
    <div className={classes.container}>
      <h4>EDUCATION</h4>
      <div>
        <div className={classes.imageCrop}>
          <img className={classes.image} src={wyncode} alt="" />
        </div>
        <p>
          <span>Wyncode Academy</span> - Web Development
        </p>
      </div>
      <div>
        <div className={classes.imageCrop}>
          <img className={classes.image} src={yale} alt="" />
        </div>
        <p>
          <span>Yale University</span> - Master's in Music
        </p>
      </div>
      <div>
        <div className={classes.imageCrop}>
          <img className={classes.image} src={iu} alt="" />
        </div>
        <p>
          <span>Indiana University</span> - Bachelor's in Music
        </p>
      </div>
    </div>
  );
};

export default Education;
