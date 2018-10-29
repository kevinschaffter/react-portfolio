import React, { Component } from 'react';
import classes from './Portfolio.module.css';
import { Icons, Education, Work, Slider, Bio } from '../../components/index';
import { Fade } from 'react-reveal';
import { faArrowCircleDown, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Portfolio extends Component {
  render() {
    return <div className={classes.container} />;
  }
}

export default Portfolio;
