import React, { Component } from 'react';
// import classnames from 'classnames';
import classes from './Portfolio.module.css';
import { breeze, acafe, maze } from '../../images';
import { Fade } from 'react-reveal';
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
                  <p>Test</p>
                </div>
                <img src={breeze} alt="breeze" />
              </div>
              <h4>CareCloud - Breeze</h4>
            </div>
            <div>
              <div className={classes.imgCrop}>
                <img src={maze} alt="breeze" />
              </div>
              <h4>MAZE</h4>
            </div>
            <div>
              <div className={classes.imgCrop}>
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
