import React from 'react';
import classes from './Bio.module.css';

const Bio = _ => {
  return (
    <div className={classes.container}>
      <h4>BIO</h4>
      <div className={classes.contentContainer}>
        <div className={classes.labels}>
          <p>Citizenship:</p>
          <p>Place of birth:</p>
          <p>Language:</p>
        </div>
        <div className={classes.text}>
          <p>American, Canadian &amp; Thai</p>
          <p>Bangkok, Thailand</p>
          <p>English &amp; Spanish (basic working proficiency)</p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
