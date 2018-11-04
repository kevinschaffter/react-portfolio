import React from 'react';
import classes from './Portfolio.module.scss';
import { breeze, acafe, maze, carecloud } from '../../images';
import { Fade } from 'react-reveal';
import { Button } from '../../components';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Portfolio = ({ setRef }) => (
  <div
    className={classes.container}
    ref={ref => {
      setRef({ ref, page: 'portfolio' });
    }}
  >
    <Fade>
      <h3>A Few Projects I've Worked On</h3>
      <div className={classes.contentContainer}>
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
          <h4>CareCloud - Breeze</h4>
        </div>
        <div>
          <div className={classes.imgCrop}>
            <div className={classes.overlay}>
              <p>
                Upload walking tours by entering destinations with google autocomplete. An optimized route is created
                hitting locations in the shortest distance possible using Mapbox Routes API. Maze also pulls photos,
                websites and logos for each location using the Google Places API.
              </p>
              <div className={classes.pitchDay}>
                <FontAwesomeIcon icon={faAward} />
                <p>WINNER - Wyncode Pitch Day 2018</p>
              </div>
              <Button small className={classes.visitBtn} link="http://a-maze.me/maze/8">
                Visit
              </Button>
            </div>
            <img src={maze} alt="maze" />
          </div>
          <h4>MAZE</h4>
        </div>
        <div>
          <div className={classes.imgCrop}>
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
          <h4>AudtionCafe.com</h4>
        </div>
      </div>
    </Fade>
  </div>
);

export default Portfolio;
