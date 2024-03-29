import React from 'react';
import { Fade } from 'react-reveal';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './Contact.module.scss';
import { Icons } from '../../components/index';
import { iconInfo } from './IconInfo';
import { headshot } from '../../images';

const Contact = () => (
  <div className={classes.container}>
    <Fade>
      <h3>Get In Touch!</h3>
      <div className={classes.grid}>
        <div className={classes.infoContainer}>
          <div className={classes.imgCrop}>
            <img src={headshot} alt="" />
          </div>
          <div className={classes.rightInfo}>
            <h4>Kevin Schaffter</h4>
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              <p>kevin@schaffters.com</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faPhone} />
              <p>812.361.4656</p>
            </div>
          </div>
        </div>
        <Icons iconInfo={iconInfo} />
      </div>
    </Fade>
  </div>
);

export default Contact;
