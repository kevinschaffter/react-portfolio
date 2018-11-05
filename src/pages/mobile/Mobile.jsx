import React from 'react';
import classes from './Mobile.module.scss';
import { Background } from '../../components';

const Mobile = _ => {
  return (
    <div className={classes.container}>
      <Background />
      <h3>I see you're using a mobile device!</h3>
      <p>
        This is a brand new site and I'm in the process of making it 100% mobile responsive.{' '}
        <span role="img" aria-label="monkey">
          🙈
        </span>
      </p>
      <br />
      <p>
        Please check it out on your laptop instead. It's worth it I promise!{' '}
        <span role="img" aria-label="smile">
          😀
        </span>
      </p>
    </div>
  );
};

export default Mobile;
