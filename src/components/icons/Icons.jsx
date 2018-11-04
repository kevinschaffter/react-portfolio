import React from 'react';
import classes from './Icons.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fade } from 'react-reveal';

const Icons = ({ iconInfo, stagger, delay, ...animation }) => {
  return (
    <div className={classes.logoContainer}>
      {iconInfo.map(({ icon, text, link }, i) => (
        <Fade {...animation} delay={stagger ? `${i * 200}` : delay} style={link && { cursor: 'pointer' }}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={icon} />
            <h4>{text}</h4>
          </a>
        </Fade>
      ))}
    </div>
  );
};

export default Icons;
