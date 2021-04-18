import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Fade } from 'react-reveal';
import classNames from 'classnames';
import { faMagic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './Landing.module.scss';
import { Background, Button } from '../../components';
import { useRandomColor } from '../../hooks';

const Landing = ({ handleMoreClick, isSafari }) => {
  const typedRef = useRef(null);
  const typedElementRef = useRef(null);
  const { color, getRandomColor } = useRandomColor();

  const buttonStyle = () => isSafari && { style: { fontSize: 15.5 } };

  useEffect(() => {
    const options = {
      strings: ['Web Applications', 'User Interfaces', 'React Applications', 'Time Machines', 'Fun Web Things'],
      typeSpeed: 60,
      backSpeed: 35,
      loop: true,
    };
    typedRef.current = new Typed(typedElementRef.current, options);
  }, []);

  return (
    <div className={classNames(classes.container, classes[color])}>
      <div className={classes.magicIcon}>
        <FontAwesomeIcon icon={faMagic} onClick={getRandomColor} />
      </div>
      <Background />
      <Fade>
        <div className={classes.textWrapper}>
          <h1>Hi, I'm Kevin.</h1>
          <div className={classes.subheader}>
            <h3>
              I Build{' '}
              <span
                ref={el => {
                  typedElementRef.current = el;
                }}
              />
            </h3>
          </div>
          <hr />
          <h4>Software Engineer based in Austin, TX</h4>
          <Button {...buttonStyle()} onClick={() => handleMoreClick('about')}>
            Learn More
          </Button>
        </div>
      </Fade>
    </div>
  );
};

export default Landing;
