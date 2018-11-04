import React, { Component } from 'react';
import { Landing, About, Portfolio, Contact } from './';
export default class AppRoot extends Component {
  handleMoreClick = page => {
    this[page].scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };
  setRef = ({ ref, page }) => {
    this[page] = ref;
  };
  render() {
    return (
      <>
        <Landing handleMoreClick={this.handleMoreClick} />
        <About setRef={this.setRef} handleMoreClick={this.handleMoreClick} />
        <Portfolio setRef={this.setRef} />
        <Contact />
      </>
    );
  }
}
