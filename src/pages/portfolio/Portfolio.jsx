import React, { Component } from 'react';
// import classnames from 'classnames';
import classes from './Portfolio.module.css';
import { breeze, acafe, maze } from '../../images';
import { Fade } from 'react-reveal';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Portfolio extends Component {
  render() {
    const { setRef } = this.props;
    return (
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
                  <p>
                    Rebuilt CareCloud's award winning patient portal app "Breeze" with team of five utilizing React and
                    GraphQL. Breeze is in production and being used by over 20,000 patients.
                  </p>
                  <div>
                    <p>Visit Site</p>
                    <FontAwesomeIcon icon={faArrowCircleRight} />
                  </div>
                </div>
                <img src={breeze} alt="breeze" />
              </div>
              <h4>CareCloud - Breeze</h4>
            </div>
            <div>
              <div className={classes.imgCrop}>
                <div className={classes.overlay}>
                  <p>
                    Maze allows users to upload walking routes by entering destinations with google autocomplete. An
                    optimized walking route is created automatically that hits all locations in the shortest distance
                    possible using Mapbox Routes API. Maze also pulls photos, websites, logos and more for each location
                    using the Google Places API.
                  </p>
                  <p>WINNER - Wyncode Pitch Day 2018</p>
                  <div>
                    <p>Visit Site</p>
                    <FontAwesomeIcon icon={faArrowCircleRight} />
                  </div>
                </div>
                <img src={maze} alt="breeze" />
              </div>
              <h4>MAZE</h4>
            </div>
            <div>
              <div className={classes.imgCrop}>
                <div className={classes.overlay}>
                  <p>
                    I am the founder and creator of AuditionCafe.com - the world's leading classical music job board.
                    Each year the site is visited by over 365,000 unique users in 175 countries around the world. My
                    role in the development of the site was project management and front-end development.
                  </p>
                </div>
                <img src={acafe} alt="breeze" />
              </div>
              <h4>AudtionCafe.com</h4>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default Portfolio;
