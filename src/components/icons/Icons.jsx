import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fade } from 'react-reveal';
import classes from './Icons.module.scss';

const Icons = ({ iconInfo, stagger, delay, ...animation }) => (
  <div className={classes.logoContainer}>
    {iconInfo.map(({ icon, text, link }, i) => (
      <Fade {...animation} delay={stagger ? `${i * 200}` : delay} style={{ ...(link && { cursor: 'pointer' }) }}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={icon} size="2x" />
          <h4>{text}</h4>
        </a>
      </Fade>
    ))}
  </div>
);

export default Icons;
