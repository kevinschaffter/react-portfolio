import { faJs, faReact, faNodeJs, faHtml5, faCss3 } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import classes from './Icons.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fade } from 'react-reveal';

const logos = [faJs, faReact, faNodeJs, faHtml5, faCss3];
const text = ['JavaScript', 'React.js', 'Node.js', 'HTML', 'CSS'];
const logoInfo = logos.reduce((acc, icon, i) => acc.concat({ icon, text: text[i] }), []);

const Icons = _ => {
  return (
    <div className={classes.logoContainer}>
      {logoInfo.map(({ icon, text }, i) => (
        <Fade left delay={`${i * 250}`}>
          <div>
            <FontAwesomeIcon icon={icon} />
            <p>{text}</p>
          </div>
        </Fade>
      ))}
    </div>
  );
};

export default Icons;
