/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import classnames from 'classnames';
import { Fade } from 'react-reveal';
import classes from './Portfolio.module.scss';
import { breeze, acafe, carecloud, goScreens, remoteCarePlatform, rbiApp } from '../../images';
import { Button } from '../../components';

const Portfolio = ({ setRef, isSafari }) => (
  <div
    className={classnames(classes.container, { [classes.safari]: isSafari })}
    ref={(ref) => {
      setRef({ ref, page: 'portfolio' });
    }}
  >
    <Fade>
      <h3>A Few Projects I've Worked On</h3>
      <div className={classes.contentContainer}>
        <div>
          <div className={classes.goContainer}>
            <div className={classes.overlay}>
              <p>
                Building a next generation realtime Remote Care Platform for Optimize Health using React, GraphQL,
                Golang and AWS.
              </p>
              <p>Developed realtime features including in-app messaging, patient vital monitoring and user tasking.</p>
              <Button small className={classes.visitBtn} link="https://www.optimize.health/">
                Visit
              </Button>
            </div>
            <img src={remoteCarePlatform} alt="remote care platform" />
          </div>
          <h4>Remote Care Platform</h4>
        </div>
        <div>
          <div className={classes.rbiContainer}>
            <div className={classes.overlay}>
              <p>Worked on desktop and mobile apps for parent company of Burger King, Popeyes and Tim Hortons.</p>
              <p>Helped lead feature team on development and launch of RBI's new loyalty program.</p>
              <p>Integrated Apple Pay into Tim Hortons mobile app.</p>
              <Button small className={classes.visitBtn} link="https://www.rbi.com/English/brands/default.aspx">
                Visit
              </Button>
            </div>
            <img src={rbiApp} alt="rbi" />
          </div>
          <h4>Restaurant Brands International</h4>
        </div>
        <div>
          <div className={classes.goContainer}>
            <div className={classes.overlay}>
              <p>
                Worked on CareCloud's next generation cloud-based practice management / EHR using React, GraphQL,
                firebase and firestore in a micro-frontend architecture.
              </p>
              <p>Led the UI scheduling feature team in building the applications' new appointment scheduling system.</p>
              <Button small className={classes.visitBtn} link="https://www.carecloud.com/go/">
                Visit
              </Button>
            </div>
            <img src={goScreens} alt="CareCloud go" />
          </div>
          <h4>CareCloud Go</h4>
        </div>
        <div>
          <div className={classes.breezeContainer}>
            <div className={classes.overlay}>
              <img src={carecloud} alt="carecloud" className={classes.carecloudLogo} />
              <p>
                Rebuilt CareCloud's award winning patient portal app "Breeze" in React and GraphQL with core team of
                five. Breeze is in production and being used by over 20,000 patients.
              </p>
              <Button small className={classes.visitBtn} link="https://carecloud.com/breeze/">
                Visit
              </Button>
            </div>
            <img src={breeze} alt="breeze" />
          </div>
          <h4>Breeze Portal</h4>
        </div>
        <div>
          <div className={classes.auditionContainer}>
            <div className={classes.overlay}>
              <p>Founder and creator of AuditionCafe.com, the world's leading classical music job board.</p>
              <p>
                Each year the site is visited by over 365,000 unique users in 175 countries around the world. My role in
                the development of the site was front-end development and project management.
              </p>
              <Button small className={classes.visitBtn} link="http://auditioncafe.com">
                Visit
              </Button>
            </div>
            <img src={acafe} alt="audition cafe" />
          </div>
          <h4>AuditionCafe.com</h4>
        </div>
      </div>
    </Fade>
  </div>
);

export default Portfolio;
