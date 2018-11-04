import React, { PureComponent } from 'react';
import classes from './Landing.module.scss';
import Typed from 'typed.js';
import { Background, Button } from '../../components';
import { Fade } from 'react-reveal';

class Landing extends PureComponent {
  componentDidMount() {
    const options = {
      strings: ['Web Applications', 'User Interfaces', 'React Applications', 'Time Machines', 'Fun Web Things'],
      typeSpeed: 60,
      backSpeed: 35,
      loop: true
    };
    this.typed = new Typed(this.el, options);
  }
  render() {
    const { handleMoreClick } = this.props;
    return (
      <div className={classes.container}>
        <Background />
        <Background />

        <Fade>
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
            <Button onClick={_ => handleMoreClick('about')}>Learn More</Button>
          </div>
        </Fade>
      </div>
    );
  }
}

export default Landing;
