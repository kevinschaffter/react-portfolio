import React, { Component } from 'react';
import { Landing, About, Portfolio, Contact } from './';

export default class AppRoot extends Component {
  get isSafari() {
    return navigator.vendor === 'Apple Computer, Inc.';
  }

  isMobileDevice = typeof window.orientation !== 'undefined' || navigator.userAgent.includes('IEMobile');

  handleMoreClick = page => {
    this[page].scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  setRef = ({ ref, page }) => (this[page] = ref);

  render() {
    return (
      <>
        <Landing handleMoreClick={this.handleMoreClick} isSafari={this.isSafari} />
        <About setRef={this.setRef} handleMoreClick={this.handleMoreClick} isMobileDevice={this.isMobileDevice} />
        <Portfolio setRef={this.setRef} isSafari={this.isSafari} />
        <Contact />
      </>
    );
  }
}
