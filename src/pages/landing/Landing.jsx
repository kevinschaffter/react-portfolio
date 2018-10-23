import React, { Component } from 'react';
import classes from './Landing.module.css';
import Typed from 'typed.js';

class Landing extends Component {
  componentDidMount() {
    const { strings } = this.props;
    // You can pass other options here, such as typing speed, back speed, etc.
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
        <div className={classes.textWrapper}>
          <h1>Hi, I'm Kevin.</h1>
          <div className={classes.subheader}>
            <h2>
              I Build{' '}
              <span
                // style={{ whiteSpace: 'pre' }}
                ref={el => {
                  this.el = el;
                }}
              />
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
