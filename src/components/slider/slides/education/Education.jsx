import React from 'react';
import classes from './Education.module.css';
import { iu, wyncode, yale } from '../../../../images';

const Education = _ => {
  return (
    <div className={classes.container}>
      <h4>EDUCATION</h4>
      <div>
        <div className={classes.imageCrop}>
          <img className={classes.image} src={wyncode} alt="" />
        </div>
        <p>Wyncode Academy - Web Immersive</p>
      </div>
      <div>
        <div className={classes.imageCrop}>
          <img className={classes.image} src={yale} alt="" />
        </div>
        <p>Yale University - MMus</p>
      </div>
      <div>
        <div className={classes.imageCrop}>
          <img className={classes.image} src={iu} alt="" />
        </div>
        <p>Indiana University - BMus</p>
      </div>
    </div>
  );
};

export default Education;
