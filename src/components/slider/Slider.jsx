import React, { Component } from 'react';
import classes from './Slider.module.css';
import { Fade } from 'react-reveal';
import classnames from 'classnames';
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Slider extends Component {
  state = { step: 0, keys: Array(3).fill(Math.random()) };
  handleMenuClick = step => this.setState({ step });
  get step() {
    const { step } = this.state;
    return { transform: `translateX(-${step * 100}%)` };
  }
  render() {
    const { keys, step } = this.state;
    return (
      <Fade delay={1200}>
        <div className={classes.container}>
          <FontAwesomeIcon
            icon={faArrowCircleLeft}
            onClick={_ => this.handleMenuClick(step - 1)}
            className={classnames(classes.arrow, { [classes.visible]: step })}
          />
          <div className={classes.menuContainer}>
            <div className={classes.menu}>
              {keys.map((key, i) => (
                <div
                  className={classnames(i === step && classes.active, classes.menuItem)}
                  key={key}
                  onClick={_ => this.handleMenuClick(i)}
                />
              ))}
            </div>
            <div className={classes.contentContainer}>
              <div className={classes.slider} style={this.step}>
                {this.props.children}
              </div>
            </div>
          </div>
          <FontAwesomeIcon
            icon={faArrowCircleRight}
            onClick={_ => this.handleMenuClick(step + 1)}
            className={classnames(classes.arrow, { [classes.visible]: step < keys.length - 1 })}
          />
        </div>
      </Fade>
    );
  }
}

export default Slider;
