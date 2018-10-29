import React from 'react';
import classes from './Bio.module.css';

const Bio = _ => {
  return (
    <div className={classes.container}>
      <h4>BIO</h4>
      <div className={classes.contentContainer}>
        <div className={classes.labels}>
          <p>Citizenship:</p>
          <p>Language:</p>
          <p>Place of birth:</p>
        </div>
        <div className={classes.text}>
          <p>American, Canadian &amp; Thai</p>
          <p>English &amp; Spanish (basic working proficiency)</p>
          <p>Bangkok, Thailand</p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
