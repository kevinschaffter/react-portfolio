import React, { Component } from 'react';
import classes from './Landing.module.css';
import Typed from 'typed.js';
import { Background } from '../../components';

class Landing extends Component {
  componentDidMount() {
    const options = {
      strings: ['Web Applications', 'User Interfaces', 'React Apps', 'Time Machines', 'Fun Web Things'],
      typeSpeed: 60,
      backSpeed: 35,
      loop: true
    };
    this.typed = new Typed(this.el, options);
  }
  render() {
    return (
      <div className={classes.container}>
        <Background />
        <div className={classes.textWrapper}>
          <h1>Hi, I'm Kevin.</h1>
          <div className={classes.subheader}>
            <h3>
              I Build{' '}
              <span
                ref={el => {
                  this.el = el;
                }}
              />
            </h3>
          </div>
          <hr />
          <h4>Miami Based Software Engineer</h4>
        </div>
      </div>
    );
  }
}

export default Landing;
