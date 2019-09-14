import React, { Component } from 'react';
import { Landing, About, Portfolio, Contact, Mobile } from './';

export default class AppRoot extends Component {
  get isSafari() {
    return navigator.vendor === 'Apple Computer, Inc.';
  }
  handleMoreClick = page => {
    this[page].scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };
  setRef = ({ ref, page }) => {
    this[page] = ref;
  };
  isMobileDevice = _ => typeof window.orientation !== 'undefined' || navigator.userAgent.includes('IEMobile');
  render() {
    return (
      <>
        {false ? (
          <Mobile />
        ) : (
          <>
            <Landing handleMoreClick={this.handleMoreClick} isSafari={this.isSafari} />
            <About setRef={this.setRef} handleMoreClick={this.handleMoreClick} />
            <Portfolio setRef={this.setRef} isSafari={this.isSafari} />
            <Contact />
          </>
        )}
      </>
    );
  }
}
