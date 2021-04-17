import React from 'react';
import classes from './Bio.module.scss';

const Bio = () => (
  <div className={classes.container}>
    <h4>BIO</h4>
    <div>
      <p>Citizenship:</p>
      <p>American, Canadian &amp; Thai</p>
    </div>
    <div>
      <p>Place of birth:</p>
      <p>Bangkok, Thailand</p>
    </div>
    <div>
      <p>Countries Where Lived &amp; Worked:</p>
      <p>USA, India, Romania, Thailand, Uruguay, Vietnam</p>
    </div>
    <div>
      <p>Languages</p>
      <p>English &amp; Spanish</p>
    </div>
  </div>
);

export default Bio;
